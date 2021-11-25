import React, { Fragment, useState, useEffect } from 'react'
import Cita from './components/Cita.jsx';
import Formulario from './components/Formulario.jsx';
import './index.js'

function App() {

  //Citas en local Storage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'))
if(!citasIniciales){
  citasIniciales=[];
}
  //Arreglo de citas

  const [citas, guardarCitas] = useState(citasIniciales);

  //Uso de UseEffect para realizar ciertas operaciones cuando el state cambia
  useEffect(() => {
    if(citasIniciales){
      localStorage.setItem('citas', JSON.stringify(citas));
    }else{
      localStorage.setItem('citas', JSON.stringify([]));
    }
  }, [citas, citasIniciales]);

  //Funcion que tome las citas actuales y agregue la nueva

  const crearCita = cita => {
    guardarCitas([
      ...citas, cita
    ])
  }

  //funcion eliminar cita
  const eliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    guardarCitas(nuevasCitas);

  }
  const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus Citas';

  return (
    <Fragment>
      <h2>Administrador de Pacientes</h2>
      <div className="container">
        <div className='row'>
          <div className='one-half column'>
            <Formulario crearCita={crearCita} />
          </div>
          <div className='one-half column'>
            <h2>{titulo}</h2>
            {citas.map(cita => (
              <Cita
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
