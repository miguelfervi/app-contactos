/* eslint-disable no-undef */
import React from 'react';


import PccButton from './atoms/PccButton';
import Tabla from './Tabla';
import { theme } from './style/index';

const contactos = [{ id: 1, nombre: 'Miguel', telefono: '5555' }, { id: 2, nombre: 'Marcos', telefono: '44444' }];


const App = () => (
  <div>
    <PccButton copy="prueba" isPrimary onClick={() => alert('Click')} theme={theme} />
    <Tabla contactos={contactos} />
  </div>);

export default App;
