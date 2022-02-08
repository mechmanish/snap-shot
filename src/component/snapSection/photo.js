import React from "react";
import "./index.css";

const Photo = ({photo}) =>{

    

    // const [imageUrl, setImageUrl] = useState("");

    const photoSrc = `https://farm66.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`;
    
    // setImageUrl(photoSrc);

    return(
        <div className="onePicArea">
            <li>
                <img src={photoSrc} alt="image_of_the_item" />

                {console.log(photo, "welcome in photo.js")}
            </li>
        </div>
    );
}

export default Photo;