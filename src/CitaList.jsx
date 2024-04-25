import React from 'react';
import Cita from './Cita';

function CitaList({ citas }) {
  return (
    <div className="cita-list-container">
      <h2>Lista de Citas</h2>
      <div className="cita-list">
        {citas.map((cita, index) => (
          <Cita key={index} cita={cita} />
        ))}
      </div>
    </div>
  );
}

export default CitaList;
