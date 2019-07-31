import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import ImageDetails from "./components/ImgDetails/ImageDetails";
import Image from "./components/Image";

function App() {
  const [image, setImage] = useState();
  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  const [description, setDescription] = useState();
  const [copyright, setCopyright] = useState();

  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(result => {
        console.log(result);
        setImage(result.data.url);
        setDate(result.data.date);
        setTitle(result.data.title);
        setDescription(result.data.explanation);
        setCopyright(result.data.copyright);
      })
  }, [])

  return (
    <div className="App">
      <Image imageURL={image}/>
      <ImageDetails imageDate={date} imageTitle={title} imageDescription={description} imageCopyright={copyright}/>
    </div>
  );
}

export default App;
