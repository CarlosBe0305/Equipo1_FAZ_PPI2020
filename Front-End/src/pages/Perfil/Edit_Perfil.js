import React, { useState } from "react";
import './Edit_Perfil.css';
import './Components-Edit-Perfil/title/title'
import './Components-Edit-Perfil/label/label'
import './Components-Edit-Perfil/input/Input'
import Input from "./Components-Edit-Perfil/input/Input";


const Login = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [hasError, setHasError] = useState(false);
  
  function handleChange(name, value) {
    if (name === 'usuario') {
      setUser(value)
    } else {
      if (value.lenght < 6) {
        setPasswordError(true);
      } else {
        setPasswordError(false);
        setPassword(value)
      }
    }
  };

  function ifMatch(param) {
    if (param.user.length > 0 && param.password.length > 0) {
      if (param.user === 'bumpyroads' && param.password === '202020') {
        const { user, password } = param;
        let ac = [user, password];
        let account = JSON.stringify(ac);
        localStorage.setItem('account', account);
        setIsLogin(true);
      } else {
        setIsLogin(false);
        setHasError(true);
      }
    } else {
      setIsLogin(false);
    }
  }

  function handleSubmit() {
    let account = {user, password}
    if (account) {
      ifMatch(account);
    }
  };



  return (
    <div className="login-container">
      <label className="IniciaSesion">Información personal</label>
      {hasError &&
        <label className="label-alert">
          El usuario o contraseña ingresados son incorrectos o
      <br></br>
      no existen en nuestra plataforma.
      </label>
      }
      <div className="login-content">
      <div className="Content-label-input-button">
      <br></br>
        <label text="usuario">Nombre completo</label>
        <Input
          attribute={{
            
            placeholder: '(Nombre de usuario)'
          }}
          handleChange={handleChange}
        />
        <br></br>
        <label text="contraseña">Número telefónico</label>
        <Input
          attribute={{
            
            placeholder: '000-000-0000'
          }}
          handleChange={handleChange}
          // eslint-disable-next-line
          param={passwordError}
        />
        <br></br>
        <label text="contraseña"><center>Correo electrónico</center></label>
        <Input
          attribute={{
            
            placeholder: 'Correousuario@proveedor'
          }}
          handleChange={handleChange}
          // eslint-disable-next-line
          param={passwordError}
        />
        <br></br>
        <label text="contraseña"><center>Contraseña</center></label>
        <Input
          attribute={{
            
            placeholder: '*******'
          }}
          handleChange={handleChange}
          // eslint-disable-next-line
          param={passwordError}
        />
        <br></br>
        {passwordError &&
          <label className='label-error'>
            Contraseña invalida o incompleta
      </label>}
        <div classname='submit-button-container'>
          <button onClick={handleSubmit} className="submit-button">
            Editar
      </button>
      </div>
      <div classname='submit-button-container'>
          <button onClick={handleSubmit} className="submit-button">
            Guardar
      </button>
      </div>
      <div classname='submit-button-container'>
          <button onClick={handleSubmit} className="submit-button">
            Salir
      </button>
      </div>
        </div>
      </div>
    </div>

  );
}

export default Login;