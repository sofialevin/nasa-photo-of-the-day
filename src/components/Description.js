import React from "react";
import { Card } from "semantic-ui-react";

const Description = (props) => {
  
  return (
    <Card.Description>{props.description}</Card.Description>
  );
};

export default Description;