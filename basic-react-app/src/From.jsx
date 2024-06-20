function handleFormSubmit(event){
    event.preventDefault();
    console.log("Form Submited");
}

export default function Form(){
    return(
        <div>
            <form onSubmit={handleFormSubmit}>
                <input placeholder="Enter Something" />
                <button>Click Me</button>
            </form>
        </div>
    )
}