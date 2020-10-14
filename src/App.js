import React from 'react';
import Route from 'react-router-dom/Route'
import SignUp from './pages/Sign/Sign-Up'
import SignIn from './pages/Sign/Sign-In'
import Perfil from './pages/Perfil/Perfil1'
import EditPerfil from './pages/Perfil/Perfil2'

import Exploration from './pages/Home/Exploration/Main'
import Driving from './pages/Home/Driving/Main'
import Routing from './pages/Home/Routing/Main'
import { BrowserRouter } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {

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
    <div className="App">
      <BrowserRouter>
          <div>
            
            <Route exact path="/" component={SignIn} />
            <Route exact path="/Sign-In" component={SignIn} />
            <Route path="/Sign-Up" component={SignUp} />
            <Route path="/Perfil" component={Perfil} />
            <Route path="/Edit-Perfil" component={EditPerfil} />
            <Route exact path="/Driving" component={Driving} />
              <Route exact path="/Routing" component={Routing} />
              <Route path="/Home" component={Exploration} />
              <Route path="/Exploration" component={Exploration} />
          </div>
        </BrowserRouter>
    </div>
    );
  }
}

export default  App;