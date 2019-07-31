import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import ImageDetails from "./components/ImgDetails/ImageDetails";
import Image from "./components/Image";

function App() {
  const [image, setImage] = useState();
  const [date, setDate] = useState();

  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(result => console.log(result))
  }, [])

  return (
    <div className="App">
      <Image />
      <ImageDetails />
    </div>
  );
}

export default App;
