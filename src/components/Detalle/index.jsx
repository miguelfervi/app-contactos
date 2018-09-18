import React from 'react';
import { Link } from 'react-router-dom';

const Detalle = (props) => {
  const { contacto } = props.location.state;
  const { nombre, telefono } = contacto;

  return (
    <React.Fragment>
      <Link to="/">Volver atrás</Link>
      <p>
        <span>Nombre:</span>
        {nombre}
      </p>
      <p>
        <span>Teléfono:</span>
        {telefono}
      </p>
    </React.Fragment>
  );
};

export default Detalle;
