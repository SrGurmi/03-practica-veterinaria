import React from 'react';

function Cita({ cita }) {
  const { mascota, propietario, fecha, hora, sintomas } = cita;

  const handleDelete = () => {
    // Implementa la lógica para eliminar la cita
    console.log('Eliminar cita:', cita);
  };

  return (
    <div className="cita">
      <p><strong>Mascota:</strong> {mascota}</p>
      <p><strong>Propietario:</strong> {propietario}</p>
      <p><strong>Fecha:</strong> {fecha}</p>
      <p><strong>Hora:</strong> {hora}</p>
      <p><strong>Síntomas:</strong> {sintomas}</p>
      <button className="btn btn-delete" onClick={handleDelete}>Eliminar Cita</button>
    </div>
  );
}

export default Cita;
