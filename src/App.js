import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { Card, Image} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import styled from 'styled-components';

import Title from "./components/Title"
import Description from "./components/Description";
import Date from "./components/Date";
import Copyright from "./components/Copyright";

const WrapperDiv = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    align-content: center;
    flex-direction: column;
    margin: 0 auto;
`;

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
      .catch(error => console.log(error))
  }, [])

  return (
    <div className="App">
      <WrapperDiv>
        <h1>NASA Image of the Day</h1>
        <Card fluid>
          <Image src={image}/>
          <Card.Content>
            <Title title={title}/>
            <Date date={date} />
            <Description description={description} />
          </Card.Content>
          <Copyright copyright={copyright} />
        </Card>
      </WrapperDiv>
    </div>
  );
}

export default App;
