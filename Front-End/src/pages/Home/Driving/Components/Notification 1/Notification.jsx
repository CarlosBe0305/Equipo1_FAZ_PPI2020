import React from "react";
import './Notification.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink, withRouter } from 'react-router-dom'

class Notification extends React.Component {
  
  render() {
    return (
      <div className="Not">
          <div className="Notification">

          </div>
      </div>
    )
  }
};
Notification = withRouter(Notification);
export default Notification;