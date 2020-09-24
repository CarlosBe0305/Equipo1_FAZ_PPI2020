import React from "react";
import './Navbar.css';
import { NavLink, withRouter } from 'react-router-dom'

class Navbar extends React.Component {
  getNavLinkClass = (path) => {
    return this.props.location.pathname === path ? 'active' : '';
  }
  render() {
    return (
      <nav className="navbar navbar-expand bg-light navbar-light fixed-bottom" role="navigation">
        <div className="nav navbar-header">
          <div className="navbar-nav navbar-center">
            <ul className="nav-item">
              <li className={this.getNavLinkClass("/")} ><NavLink to="/" >Listar</NavLink></li>
            </ul>
            <ul className="nav-item">
              <li className={this.getNavLinkClass("/Login")}><NavLink to="/Login">Iniciar Sesión</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
};
Navbar = withRouter(Navbar);
export default Navbar;