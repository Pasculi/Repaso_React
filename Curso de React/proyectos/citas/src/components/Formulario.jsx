import React, { Fragment, useState } from 'react'


const Formulario = () => {
    const [cita, actualizarCitas] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    const actualizarState = (e) => {
        actualizarCitas({
            ...cita,
            [e.target.name]:e.target.value
        })
    };
const {mascota,propietario,fecha,hora,sintoma} = cita
    return (
        <Fragment>
            <h2>Crear Cita</h2>
            <form>
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
