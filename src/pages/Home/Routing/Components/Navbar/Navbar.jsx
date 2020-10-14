import React from "react";
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink, withRouter } from 'react-router-dom'

class Navbar extends React.Component {
  getNavLinkClass = (path) => {
    return this.props.location.pathname === path ? 'active' : '';
  }
  render() {
    return (
      <nav className="navbar navbar-expand bg-light navbar-light fixed-bottom" role="navigation">

        <div className="nav navbar-header ">

          <ul className={this.getNavLinkClass("/")} className="navbar-nav navbar-center" id="Driving">
            <NavLink to="/Driving" ><li className="nav-item" >
              <img src="imagenes/Modo-Conduccion.png" alt=""></img>
            </li></NavLink>
          </ul>
          <ul className="navbar-nav navbar-center" >
          <NavLink to="/Exploration" ><li className="nav-item" >
              <img src="imagenes/Modo-Exploracion.png" alt=""></img>
            </li></NavLink>
          </ul>
          <ul className="navbar-nav navbar-center" >
          <NavLink to="/Perfil" ><li className="nav-item" >
              <img src="imagenes/Perfil.png" alt=""></img>
            </li></NavLink>
          </ul>
        </div>
      </nav>
    )
  }
};
Navbar = withRouter(Navbar);
export default Navbar;