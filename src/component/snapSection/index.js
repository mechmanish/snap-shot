import React from "react";
import "./index.css";
import Photo from "./photo.js";

const SnapShot = ({searchText, photos}) =>{

    // const dataHandler = async () =>{
    //     let data = await fetch(apiLink);
    //     let parsedData = await data.json();
    //     // console.log(parsedData.photos.photo);
    //     setPhotos(parsedData.photos.photo);
    // }


    // useEffect(()=>{
    //     dataHandler();
    // },[apiLink]);


    return(
        <div>
            {console.log(photos.length, "hello index,js of snapshot")}

            <div className="searchPic">
                <h2>{searchText} Pictures</h2>
            </div>

            <div className="picArea">
                <ul>
                    {photos.map((photo)=> <Photo key={photo.id} photo={photo} />)}

                    {/* {photos.map((photo) =>{
                        return photo.id + "<br>";
                    })} */}
                </ul>
            </div>
            
        </div>
    );
}

export default SnapShot;