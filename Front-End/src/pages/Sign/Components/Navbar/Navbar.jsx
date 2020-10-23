import React from "react";
import './Navbar.css';
import { NavLink, withRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';


class Navbar extends React.Component {
  getNavLinkClass = (path) => {
    return this.props.location.pathname === path ? 'active' : '';
  }
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light fixed-right bg-light">
        <div className="nav navbar-header">
          <div className="navbar-nav navbar-center">
            <ul>
              <li className="nav-item" className={this.getNavLinkClass("/")} ><NavLink to="/" >Home</NavLink></li>

              <li className="nav-item" className={this.getNavLinkClass("/Sign-In")}><NavLink to="/Sign-In">Iniciar Sesión</NavLink></li>

              <li className="nav-item" className={this.getNavLinkClass("/Sign-Up")} ><NavLink to="/Sign-Up" >Registrarse</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>

    )
  }
};
Navbar = withRouter(Navbar);
export default Navbar;