import React, { useState } from 'react';

function CitaForm({ addCita }) {
  const [mascota, setMascota] = useState('');
  const [propietario, setPropietario] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [sintomas, setSintomas] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevaCita = { mascota, propietario, fecha, hora, sintomas };
    addCita(nuevaCita);
    setMascota('');
    setPropietario('');
    setFecha('');
    setHora('');
    setSintomas('');
  };

  return (
    <div className="cita-form-container">
      <h2>Nueva Cita</h2>
      <form onSubmit={handleSubmit} className="cita-form">
        <input
          type="text"
          placeholder="Nombre de la mascota"
          value={mascota}
          onChange={(e) => setMascota(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Nombre del propietario"
          value={propietario}
          onChange={(e) => setPropietario(e.target.value)}
          required
        />
        <input
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          required
        />
        <input
          type="time"
          value={hora}
          onChange={(e) => setHora(e.target.value)}
          required
        />
        <textarea
          placeholder="Síntomas"
          value={sintomas}
          onChange={(e) => setSintomas(e.target.value)}
          required
        ></textarea>
        <button type="submit" className="btn btn-success">Guardar Cita</button>
      </form>
    </div>
  );
}

export default CitaForm;
