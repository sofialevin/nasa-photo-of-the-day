import React from "react";

//import any components needed

import Title from "./Title";
import Description from "./Description";
import Date from "./Date";
import Copyright from "./Copyright";

const ImageDetails = () => {
  
  return (
    <div>
      {
          <div>
            <Title />
            <Description />
            <Date />
            <Copyright />
         </div>
      }
    </div>
  );
};

export default ImageDetails;

