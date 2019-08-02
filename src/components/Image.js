import React from "react";

const Image = (props) => {
if (!props.imageURL) return <div className='spinner' />
  return (
    <div>
      {
        <img src={props.imageURL} alt=""/>
      }
    </div>
  );
};

export default Image;