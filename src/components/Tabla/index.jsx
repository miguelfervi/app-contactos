import React from 'react';
import { Link } from 'react-router-dom';


const Tabla = props => (
  <React.Fragment>
    <table>
      <tbody>
        {props.contactos.map(contacto => (
          <tr key={contacto.id}>
            <td><Link to={{ pathname: `/detail/${contacto.id}`, state: { contacto } }}>{contacto.nombre}</Link></td>
            <td>{contacto.telefono}</td>
          </tr>
        ))
        }
      </tbody>
    </table>
  </React.Fragment>
);

export default Tabla;
