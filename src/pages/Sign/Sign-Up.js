import React, { useState } from 'react';
import './Sign-Up.css';

import Title from './Components-Sign-Up/Title/Title';
import Input from './Components-Sign-Up/Input/Input';
import InputR from './Components-Sign-Up/Input/InputR';

import {Link} from 'react-router-dom'
const Registro = () => {

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [isRegistro, setIsRegistro] = useState(false);
  const [hasError, setHasError] = useState(false);

  function handleChange(name, value) {
    if (name === 'nombredeusuario') {
      setUser(value)
    } else {
      if (value.length < 6) {
        setPasswordError(true);
      } else {
        setPasswordError(false);
        setPassword(value);
      }
    }
  };

  function ifMatch(param) {
    if (param.user.length > 0 && param.password.length > 0) {
      if (user === 'katherine' && param.password === '123456') {
        const { user, password } = param;
        let ac = { user, password };
        let account = JSON.stringify(ac);
        localStorage.setItem('account', account);
        setIsRegistro(true);
      } else {
        setIsRegistro(false);
        setHasError(true);
      }
    } else {
      setIsRegistro(false);
    }
  }

  function handleSumit() {
    let account = { user, password }
    if (account) {
      ifMatch(account);
    }
  };


  return (
    <div className='login-container'>
      
      <Title text='Registrarse' />
      <br />

      {hasError &&
        <label className='label-alert'>
          Por el momento no se pueden crear nuevos usuarios, ya que no contamos con una base de datos.
   </label>}

      <Input
        attribute={{
          id: 'nombredeusuario',
          name: 'nombredeusuario',
          type: 'text',
          placeholder: ' Nombre de usuario'
        }}
        handleChange={handleChange}
      />

      <InputR
        attribute={{
          id: 'nombre',
          name: 'nombre',
          type: 'text',
          placeholder: ' Nombre'
        }}
      />

      <InputR
        attribute={{
          id: 'apellido',
          name: 'apellido',
          type: 'text',
          placeholder: ' Apellido'
        }}

      />

      <InputR
        attribute={{
          id: 'correo',
          name: 'apellido',
          type: 'email',
          placeholder: ' Correo electronico'
        }}

      />

      <InputR
        attribute={{
          id: 'telefono',
          name: 'telefono',
          type: 'tel',
          placeholder: ' Telefono Celular'
        }}
      />

      <Input
        attribute={{
          id: 'contrañesa',
          name: 'contraseña',
          type: 'password',
          placeholder: ' Contraseña'
        }}
        handleChange={handleChange}
        param={passwordError}
      />

      {passwordError &&
        <label className='label-error'>
          contraseña incompleta
      </label>}

      <button className='boton1' onClick={handleSumit}>
        INICIAR
      </button>

      ¿Ya tienes una cuenta? <Link to="/Sign-In" className="link">Inicia Sesión</Link>
      
    </div>
  )
};

export default Registro;