import React, { useState } from 'react';
import Header from './Header.jsx';
import Navbar from './NavBar.jsx';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import CitaContainer from './CitaContainer.jsx';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [citas, setCitas] = useState([]);

  const handleLogin = () => {
    // Simulamos una autenticación básica
    const password = prompt('Introduce el password:');
    if (password === '123') {
      setIsLoggedIn(true);
    } else {
      alert('Contraseña incorrecta');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const addCita = (nuevaCita) => {
    setCitas([...citas, nuevaCita]);
  };

  return (
    <div className="container">
      <Header />
      <Navbar isLoggedIn={isLoggedIn} onLogin={handleLogin} onLogout={handleLogout} />
      {isLoggedIn ? (
        <CitaContainer citas={citas} addCita={addCita} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
