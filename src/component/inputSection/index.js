import React, {useEffect} from "react";
import "./index.css";

const InputSection = ({searchText, setSearchText, apiLink, setApiLink, setPhotos}) =>{

    const inputHandler = (item) =>{
        setSearchText(item.target.value);
        
    }

    const searchBtnHandler = () =>{

        console.log(searchText);
        
        const searchUrl = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=${searchText}&per_page=24&format=json&nojsoncallback=1`;
        setApiLink(searchUrl);
    }

    const dataHandler = async () =>{
        let data = await fetch(apiLink);
        let parsedData = await data.json();

        console.log(parsedData.photos.photo);

        setPhotos(parsedData.photos.photo);
    }

    useEffect(()=>{
        dataHandler();
    },[apiLink]);



    return(
        <div className="inputSection">
            <div>
                <h1>Snap Shot</h1>
            </div>
            <div>
                <input onChange={inputHandler} value={searchText} type="text" placeholder="Search..." />
                <button onClick={searchBtnHandler}>Click</button>
            </div>
            <div className="navBar">
                <ul>
                    <li>Mountain</li>
                    <li>Beaches</li>
                    <li>Bird</li>
                    <li>Food</li>
                </ul>
            </div>
        </div>
    );
}

export default InputSection;