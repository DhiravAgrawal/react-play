import { useState } from "react"

export default function Form(){

    let [inputs, setInputs] = useState([{firstName : "", middleName : ""}]);
    function handleForm(event){
        let feildName = event.target.name;
        let feildValue = event.target.value;
        setInputs((currData)=>  { 
            return {...currData, [feildName] : feildValue }
        });
    } 
    function handleSubmit(event){
        event.preventDefault();
        console.log(inputs);
        setInputs({firstName : "", middleName : ""});
    }
    return(<>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="firstName">FName</label>
            <input type="text" name="firstName" id="firstName" value={inputs.firstName} onChange={handleForm}/>
            <br /><br />    
            <label htmlFor="middleName">MName</label>
            <input type="text" name="middleName" id="middleName" value={inputs.middleName} onChange={handleForm}/>
            <br /><br />
            <button onClick={handleForm}>Submit</button>
        </form>
    </>)
}