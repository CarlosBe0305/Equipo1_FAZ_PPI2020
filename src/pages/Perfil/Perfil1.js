import React from "react";
import "./perfil1.css";
import { Link } from "react-router-dom";

const Perfil1 = () => {
  return (
    <div className="perfil1-container-1">
      <label className="perfil1-titulo">Tu Perfil</label>

      <div className="perfil1-content1">
        <img className="img1" src="imagenperfil.png" alt="Imagen" />
        <label className="perfil1-content1-text1">Nombre de usuario</label>
        <label className="perfil1-content1-text2">
          <Link to="/Edit-Perfil" className="link">
            Ver Perfil
          </Link>
        </label>
      </div>

      <div className="perfil1-content2">
        <br></br>
        <label className="perfil1-content2-text1">Información personal</label>
        <br></br>
      </div>
      <label className="perfil1-tuactividad">Tu Actividad</label>

      <div className="perfil1-content3">
        <label className="perfil1-content3-text1">
          Aquí encontrarás tu historial de busqueda
          <br></br>
          (todavia no has hecho ninguna busqueda)
        </label>
        <button className="perfil1-button">Comienza a explorar</button>
      </div>
    </div>
  );
};

export default Perfil1;
