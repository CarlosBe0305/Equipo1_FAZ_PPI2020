import React from "react";
import './header.css';

 const Header =(props)=>{
    const {text} = props;
    return (
    <div className="header-container">
     <label className="header-label"> {text} </label>
    </div>
  )
};
export default Header;