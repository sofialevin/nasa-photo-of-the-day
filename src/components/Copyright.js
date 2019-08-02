import React from "react";
import { Card } from "semantic-ui-react";

const Copyright = (props) => {
  
  return (
    <Card.Content extra>
      <p>{props.copyright}</p>
    </Card.Content>
  );
};

export default Copyright;