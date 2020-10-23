import React from "react";
import './Title.css';

const title=({text})=>{
  return (
    <div className="title-container">
     <label className="title-label"> {text} </label>
    </div>
  );
}
export default  title;