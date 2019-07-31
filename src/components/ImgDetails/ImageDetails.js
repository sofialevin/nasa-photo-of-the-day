import React from "react";

//import any components needed

import Title from "./Title";
import Description from "./Description";
import Date from "./Date";
import Copyright from "./Copyright";

const ImageDetails = (props) => {
  
  return (
    <div>
      {
          <div>
            <Title title={props.imageTitle}/>
            <Date date={props.imageDate}/>
            <Description description={props.imageDescription}/>
            <Copyright copyright={props.imageCopyright}/>
         </div>
      }
    </div>
  );
};

export default ImageDetails;

