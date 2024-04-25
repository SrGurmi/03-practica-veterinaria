import React from 'react';
import CitaForm from './CitaForm';
import CitaList from './CitaList';

function CitaContainer({ citas, addCita }) {
  return (
    <div className="cita-container">
      <CitaForm addCita={addCita} />
      <CitaList citas={citas} />
    </div>
  );
}

export default CitaContainer;

