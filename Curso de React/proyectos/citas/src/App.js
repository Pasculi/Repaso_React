import React, { Fragment } from 'react'
import Citas from './components/Citas.jsx';
import Formulario from './components/Formulario.jsx';
import './index.js'

function App() {
  return (
    <Fragment>
    <h1>Administrador de Pacientes</h1>
    <div className="container">
      <div className='row'>
        <div className='one-half column'>
          <Formulario />
        </div>
        <div className='one-half column'>
          <Citas />
        </div>
      </div>
    </div>
    </Fragment>
  );
}

export default App;
