import React from "react";
import "./App.css";

import ImageDetails from "./components/ImgDetails/ImageDetails";
import Image from "./components/Image";

function App() {
  return (
    <div className="App">
      <Image />
      <ImageDetails />
    </div>
  );
}

export default App;
