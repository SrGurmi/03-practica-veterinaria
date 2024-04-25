import React from 'react';

function Logout({ onLogout }) {
  return (
    <div className="logout-container">
      <p>¡Has iniciado sesión!</p>
      <button className="btn btn-danger" onClick={onLogout}>Cerrar Sesión</button>
    </div>
  );
}

export default Logout;

