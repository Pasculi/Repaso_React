import React from 'react'
import Productos from './Producto'

//Creamos el comonente de carrito de compras

const Carrito = ({ carrito, agregarProducto }) => {
    return (
        <div className="carrito">
            <h2>Tu Carrito de compras</h2>

            {carrito.length === 0
                ?
                <p className="vacio">No hay elementos en el carrito</p>
                :
                carrito.map(producto => (
                    <Productos
                        key={producto.id}
                        producto={producto}
                        carrito={carrito}
                        agregarProducto={agregarProducto}
                    />
                ))
            }
        </div>
    )
}

export default Carrito
