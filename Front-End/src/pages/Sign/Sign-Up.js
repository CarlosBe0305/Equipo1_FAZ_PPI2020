import React, { useState } from 'react';
import './Sign-Up.css';
import './Components-Sign-Up/Input/Input.css';

import Title from './Components-Sign-Up/Title/Title';
import Input from './Components-Sign-Up/Input/Input';
import InputR from './Components-Sign-Up/Input/InputR';

import {Link} from 'react-router-dom'
const Registro = () => {
  const initialState = {
    nombredeusuario:'',
    nombre: '',
    telefono:'',
    correo: '',
    contraseña: ''
  }

  const [users, setUsers] = useState(initialState)

  function submitData(e){
    e.preventDefault()
    fetch('http://localhost:3001/api/usuarios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(users)
    })
    window.location.href = 'http://localhost:3000/Home'
    console.log('Se enviaron los datos')
  }

  function handlerChange(e){
    // console.log(e.target.value)
    setUsers({...users, [e.target.name] : e.target.value})
  }

  return (
    <div className='login-container'>
      
      <Title text='Registrarse' />
      <br />

    <form onSubmit={submitData}>

   <div>
      <input 
            name='nombredeusuario'
            placeholder="Nombre de usuario"
            type="text"
            className='regular-style'
            onChange={(e) => handlerChange(e)}
            />
        </div>

        <div>
      <input 
            name='nombre'
            placeholder="Nombre"
            type="text"
            className='regular-style'
            onChange={(e) => handlerChange(e)}
            />
        </div>

        <div>
      <input 
            name='telefono'
            placeholder="Telefono"
            type="text"
            className= 'regular-style'
            onChange={(e) => handlerChange(e)}
            />
        </div>

        <div>
      <input 
            name='correo'
            placeholder="Correo"
            type="text"
            className='regular-style'
            onChange={(e) => handlerChange(e)}
            />
        </div>
        <div>

      <input 
            name='contraseña'
            placeholder="Contraseña"
            type="password"
            className='regular-style'
            onChange={(e) => handlerChange(e)}
            />
        </div>

      <button type='submit' className='boton1'>
        INICIAR
      </button>
      </form>
      ¿Ya tienes una cuenta? <Link to="/Sign-In" className="link">Inicia Sesión</Link>
      
    </div>
  )
};

export default Registro;