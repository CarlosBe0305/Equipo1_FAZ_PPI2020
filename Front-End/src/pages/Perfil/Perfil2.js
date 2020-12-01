import React from 'react';
import './perfil2.css';
import { Link } from 'react-router-dom'

const Perfil2 = () => {
  
    return (
      
      <div className="perfil2-container-1">   
      <div className="perfil2-container-11">
      <img className="perfil2img" src='imagenperfil22-1.png' alt='Imagen' />
      <label className="nombredeusuario_perfil2">Nombre de usuario</label>
          <div className="content_perfil2">
          <button className="content_perfil2-text1">
          <br></br> Agregar una biografía corta
                              <br></br> +
          </button>
          </div>
      </div>
      <button className="perfil2-button"> <Link to="/Perfil" className="link-2">Volver</Link></button>

      </div>

  
    );
  }
  

export default Perfil2;