import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
export default function ToDOList(){
    let [todos, setTodos] =  useState([{task : "sample task", id : uuidv4(), isDone:false}]);
    let [newTodo, setNewTodo] =  useState("");
    let styles = {textDecorationLine: 'line-through'};
    function addTask(){
        setTodos((prevTodos)=>{return [...prevTodos,{task : newTodo, id : uuidv4(), isDone:false}]});
        setNewTodo("");
    }
    function deleteTask(id){
        setTodos(todos.filter((todo)=>todo.id!=id));
    }
    function updateTodo(event){
        setNewTodo(event.target.value);
    }
    function isDone(id){
        setTodos((prevTodos)=>
            prevTodos.map((todo)=>{
                if(todo.id == id){
                    return {
                        ...todo,
                        isDone : true,
                    }
                }
                else{
                    return todo;
                }
            })
        );
    }
    return(
        <div>
            <input type="text" placeholder="add a task" value = {newTodo} onChange={updateTodo}/>
            <br />
            <button type="submit" onClick={addTask}>Add task</button>
            <br /><br /><br />
            <hr /> 
            <h1>ToDo List</h1>
            <ul>
                {todos.map((todo) => (
                    // eslint-disable-next-line react/jsx-key
                    <li key={todo.id} style={(todo.isDone)?styles:null}><span>
                        {todo.task}
                        <button onClick={()=>deleteTask(todo.id)}>Delete</button>
                        <button onClick={()=>isDone(todo.id)}>Done</button>
                    </span></li>
                ))}
            </ul>
        </div>
    )
}