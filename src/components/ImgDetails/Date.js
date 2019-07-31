import React from "react";

const Date = (props) => {
  
  return (
    <div>
      {
          <time>{props.date}</time>
      }
    </div>
  );
};

export default Date;