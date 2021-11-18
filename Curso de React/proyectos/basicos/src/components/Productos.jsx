import React from 'react'

const Productos = ({ producto, carrito, agregarProducto, productos }) => {
    const { nombre, precio, id } = producto;

    //Agregar producto al carrito
    const seleccionarProducto = (id) => {
        const producto = productos.filter(producto => producto.id === id)[0];
        agregarProducto([...carrito, producto]);

    }

    return (
        <div>
            <h1> {nombre}</h1>
            <p> ${precio}</p>
            <button
                type="button"
                onClick={() => seleccionarProducto(id)}>Comprar
            </button>
        </div>
    )
}

export default Productos
