import React from 'react'
import Productos from '../components/Producto'



const Carrito = ({ carrito, agregarProducto }) => {
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
                        carrito={carrito}
                        agregarProducto={agregarProducto}
                    />
                ))
            }
        </div>
    )
}

export default Carrito
