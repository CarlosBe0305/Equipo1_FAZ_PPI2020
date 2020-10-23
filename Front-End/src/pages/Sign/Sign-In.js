import React, { useState } from "react";
import './Sign-In.css';
import './Components-Sign-In/title/title'
import './Components-Sign-In/label/label'
import './Components-Sign-In/input/Input'
import Input from "./Components-Sign-In/input/Input";
import { Link, Redirect } from 'react-router-dom'

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
    let account = { user, password }
    if (account) {
      ifMatch(account);
    }
  };



  return (



    <div>
      { isLogin ? <Redirect to="/Home" /> :

        <div className="login-container">
          <label className="IniciaSesion">Inicia Sesión</label>
          {hasError &&
            <label className="label-alert">
              El usuario o contraseña ingresados son incorrectos o
            <br></br>
            no existen en nuestra plataforma.
            </label>
          }
          <div className="Content-label-input-button">
            <br></br>
            <label text="usuario">Usuario:</label>
            <Input
              attribute={{
                id: 'usuario',
                name: 'usuario',
                type: 'text',
                placeholder: 'Ingrese su usuario'
              }}
              handleChange={handleChange}
            />
            <br></br>
            <label text="contraseña">Contraseña:</label>
            <Input
              attribute={{
                id: 'contraseña',
                name: 'contraseña',
                type: 'password',
                placeholder: 'Ingrese su contraseña'
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
                Iniciar Sesión
            </button>
            </div>
          </div>
          ¿No tienes una cuenta todavía? <Link to="/Sign-Up" className="link">Regístrate</Link>
        </div>


      }
    </div>



  );
}

export default Login;