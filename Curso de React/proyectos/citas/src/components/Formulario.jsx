import React, { Fragment } from 'react'


const Formulario = () => {
    return (
        <Fragment>
            <h2>Crear Cita</h2>
            <form>
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    neme="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                />
                <label>Nombre del dueño</label>
                <input
                    type="text"
                    neme="propietario"
                    className="u-full-width"
                    placeholder="Nombre del dueño de la mascota"
                />
                <label>Nombre Mascota</label>
                <input
                    type="date"
                    neme="mascota"
                    className="u-full-width"
                />
                <label>Hora</label>
                <input
                    type="time"
                    neme="hora"
                    className="u-full-width"
                />
                <label>Síntomas</label>
                <textarea className="u-full-width">

                </textarea>
                <button className="u-full-width button-primary">Agregar cita</button>
            </form>
        </Fragment>
    )
}

export default Formulario
