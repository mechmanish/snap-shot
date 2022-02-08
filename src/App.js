import React, {useState} from "react";
import './App.css';
import SideTag from './component/sideTag/index.js';
import InputSection from './component/inputSection/index.js';
import SnapShot from "./component/snapSection/index.js";

const App = () =>{
  const [searchText, setSearchText] = useState("");
  const [apiLink, setApiLink] = useState("");
  const [photos, setPhotos] = useState([]);


  return (
    <div className="App">
      <SideTag />
      <div className="centerSection">

        <InputSection searchText={searchText} setSearchText={setSearchText} apiLink={apiLink} setApiLink={setApiLink} setPhotos={setPhotos} />

        <SnapShot searchText={searchText} photos={photos} />

      </div>
    </div>
  );
}

export default App;
