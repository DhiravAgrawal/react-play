import { useState } from "react";
export default function LikeButton(){
    
    let [isLiked, setIsLiked] = useState(false);

    let handleLike = () => {
        setIsLiked(!isLiked);
    };

    return(
        <div>
            Like Button  
            <p onClick={handleLike}>
                {isLiked  ? <i className="fa-regular fa-heart" />
                : <i className="fa-solid fa-heart"/>}
            </p>  
        </div>
    );
}