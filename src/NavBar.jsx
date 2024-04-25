import React, { useState } from 'react';
import Login from './Login';
import './Navbar.css'; // Importa los estilos CSS específicos del Navbar

function Navbar({ isLoggedIn, username, onLogin, onLogout }) {
  const [showLogin, setShowLogin] = useState(false);

  const handleLogin = (username) => {
    setShowLogin(false); // Oculta el formulario de inicio de sesión al iniciar sesión
    onLogin(username); // Llama a la función onLogin del padre
  };

  const handleLogout = () => {
    onLogout(); // Llama a la función onLogout del padre
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <ul className="navbar-menu">
          <li className="navbar-item"><a href="#x">Inicio</a></li>
          <li className="navbar-item"><a href="#x">Acerca de</a></li>
          <li className="navbar-item"><a href="#x">Contacto</a></li>
        </ul>
      </div>
      <div className="navbar-right">
        {isLoggedIn ? (
          <div className="user-info">
            <p className="navbar-welcome">Bienvenido: {username}</p>
            <button className="btn btn-logout" onClick={handleLogout}>Cerrar Sesión</button>
          </div>
        ) : (
          <div className="login-container">
            <button className="btn btn-login" onClick={() => setShowLogin(true)}>Iniciar Sesión</button>
            {showLogin && <Login onLogin={handleLogin} />}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

