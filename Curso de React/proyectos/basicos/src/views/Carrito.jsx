import React from 'react'
import Productos from '../components/Productos'
import './carrito.css'


const Carrito = ({carrito}) => {
    return (
        <div className="carrito">
            <h1>Tu Carrito de compras</h1>

            {carrito.length === 0 
            ?
                <p>No hay elementos en el carrito</p>
            :
            carrito.map(producto => (
                <Productos 
                    key={producto.id}
                    producto={producto}
                />
            ))
            }
        </div>
    )
}

export default Carrito
