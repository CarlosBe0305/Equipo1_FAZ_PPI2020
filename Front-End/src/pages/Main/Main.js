import React from "react";
import './Main.css';
import './Components/title/title'
import './Components/label/label'
import './Components/input/Input'
import './Components/header/header'

import Header from "./Components/header/header"



class Main extends React.Component {

  // fake authentication Promise
  authenticate(){
    return new Promise(resolve => setTimeout(resolve, 2000)) // 2 seconds
  }

  componentDidMount(){
    this.authenticate().then(() => {
      const ele = document.getElementById('ipl-progress-indicator')
      if(ele){
        // fade out
        ele.classList.add('available')
        setTimeout(() => {
          // remove from DOM
          ele.outerHTML = ''
        }, 2000)
      }
    })
  }



  render() {
    return (
    <div className="container">
      <Header text='BUMPY ROADS'/>
      
    </div>
    
  );
}
}


export default Main;