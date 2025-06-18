import React, { useState } from 'react';
import './css/login.css';
import { login as loginService } from '../services/api';
import { useNavigate } from 'react-router-dom';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const data = await loginService(username, password);
      localStorage.setItem('token', data.token);
      if (onLogin) onLogin(username);
      navigate('/productos');
    } catch (err) {
      setError(err.message || 'Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="login-container">
      {/* Imagen de fondo */}
      <img src="/Imagenes/image.png" alt="Fondo" className="background-image" />
    <div className="image-overlay"></div>

      {/* Contenedor principal */}
      <div className="login-content">
        {/* Imagen lateral (solo en desktop) */}
        <div className="login-image-side">
        <img src="/Imagenes/image1.png" alt="Inicio" />
      </div>

        {/* Formulario de login */}
         <form className="login-form" onSubmit={handleSubmit}>
          <h2 className="login-title">INICIO SESIÒN</h2>
          
          <div className="login-field">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Usuario"
              required
              autoFocus
            />
          </div>
          
          <div className="login-field">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contraseña"
              required
            />
          </div>  
          {error && <p className="login-error">{error}</p>}
          
          <button type="submit" className="login-btn">INICIAR SESIÓN</button>
        </form>
      </div>
    </div>
  );
}

export default Login;