import React, { Fragment, useState } from 'react'
import { uuid } from 'uuidv4';

const Formulario = ({ crearCita }) => {
    const [cita, actualizarCitas] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });


    const [error, actualizarError] = useState(false)
    // Funcion que se ejecuta cada ved que el usuario escribe en un input
    const actualizarState = (e) => {
        actualizarCitas({
            ...cita,
            [e.target.name]: e.target.value
        })
    };
    //Extraemos los valores
    const { mascota, propietario, fecha, hora, sintoma } = cita;

    //Cuando el usuario presiona agregar cita
    const submitCita = (e) => {
        e.preventDefault();


        //Validar datos

        if (mascota === '' || propietario === '' || fecha === '' || hora === '' || sintoma === '') {
            actualizarError(true);
            return;
        }
        //Eliminar el mensaje previous
        actualizarError(false);

        //Asignar ID
        cita.id = uuid();

        //Crear la cita en el state principal
        crearCita(cita);
        //Reiniciar el Formulario
        actualizarCitas({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        })
    }

    return (
        <Fragment>
            <h2>Crear Cita</h2>
            {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}
            <form
                onSubmit={submitCita}

            >
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={actualizarState}
                    value={mascota}
                />
                <label>Nombre del dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre del dueño de la mascota"
                    onChange={actualizarState}
                    value={propietario}
                />
                <label>Nombre Mascota</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />
                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />
                <label>Síntomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={actualizarState}
                    value={sintoma}
                ></textarea>
                <button className="u-full-width button-primary">Agregar cita</button>
            </form>
        </Fragment>
    )
}

export default Formulario
