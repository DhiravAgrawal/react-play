import { useState } from "react"
import Comment from "./Comment";
let cmtArr = [];
export default function CommentsFrom(){
    let [formData, setFormData] = useState({
        userName : "",
        remark : "",
        rating : "",
    });
    function handleFormData(event){
        let feildName = event.target.name;
        let feildValue = event.target.value;
        setFormData((currData)=>  { 
            return {...currData, [feildName] : feildValue }
        });
    } 
    function handleSubmit(event){
        cmtArr.push(formData);
        event.preventDefault();
        console.log(cmtArr);
        setFormData({
            userName : "",
            remark : "",
            rating : "",
        });
    }
    return(
        <div>
            <h4>Give a comment!</h4>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name="userName" id="userName" value={formData.userName} onChange={handleFormData}/>
                <br /><br />
                <textarea name="remark" id="remark" value={formData.remark} onChange={handleFormData}>Remarks</textarea>
                <br /><br />
                <input name="rating" type="number" placeholder="rating" min={1} max={5} value={formData.rating} onChange={handleFormData}/>
                <br /><br />
                <button onClick={handleFormData}>Add Comment</button>
            </form>

            <h3>Comments</h3>
            <p>
                {cmtArr.forEach(ele => {
                    <Comment userName={ele.userName} remark={ele.remark} rating={ele.rating}/>
                })}
            </p>
        </div>
    )
}