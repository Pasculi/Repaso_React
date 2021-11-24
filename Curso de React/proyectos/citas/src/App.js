import React, { Fragment, useState } from 'react'
import Cita from './components/Cita.jsx';
import Formulario from './components/Formulario.jsx';
import './index.js'

function App() {


  //Arreglo de citas 

  const [citas, guardarCitas] = useState('');

  //Funcion que tome las citas actuales y agregue la nueva

  const crearCita = cita => {
    guardarCitas([
      ...citas, cita
    ])
  }

  return (
    <Fragment>
      <h2>Administrador de Pacientes</h2>
      <div className="container">
        <div className='row'>
          <div className='one-half column'>
            <Formulario crearCita={crearCita} />
          </div>
          <div className='one-half column'>
            <h2>Administra tus Citas</h2>
            {citas.map(cita =>(
              <Cita
                key={cita.id}
                cita={cita}
              />
            ))}

          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
