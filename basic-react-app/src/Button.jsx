function handleClick(){
    console.log("hello");

}
function handleMouseOver(){
    console.log("Bye");
}
export default function Button(){
    return(
        <div>
            <button onClick={handleClick}>Cilck Me</button>
            <p onMouseOver={handleMouseOver}>Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Dolore quae blanditiis veritatis fugit debitis quidem, 
                aliquam et temporibus delectus? Blanditiis, 
                magnam ullam! Nesciunt aspernatur ea impedit hic sapiente id nobis!</p>
        </div>
    )
}