import React from "react";
import './Notification.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink, withRouter } from 'react-router-dom'

class Notification extends React.Component {

  render() {
    return (
      <div className="Not">
        <div className="Notification">
          <label className='label-notificacion_1'>
            ¡Cuidado! En 100 metros te encontrarás un bache
   </label>

<br/>
          <div className='div-notificacion_1'>
            <img src="imagenes/microfono.PNG" />
          </div>
        </div>
      </div>
    )
  }
};
Notification = withRouter(Notification);
export default Notification;