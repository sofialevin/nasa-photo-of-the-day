import React from "react";
import { Card } from "semantic-ui-react";

const Date = (props) => {
  
  return (
    <Card.Meta>
      <time>{props.date}</time>
    </Card.Meta>
  );
};

export default Date;