import React from 'react'

const Producto = ({ producto, carrito, agregarProducto, productos }) => {
    const { nombre, precio, id, foto } = producto;

    //Agregar producto al carrito
    const seleccionarProducto = (id) => {
        const producto = productos.filter(producto => producto.id === id)[0]; // Asi accedemos al objeto [0]
        agregarProducto([
            ...carrito, //Creamos una copia de carrito o clonamos, y le vamos adicionando producto
            producto]);

    }

    //Eliminar producto del carrito de compras
    const eliminarProducto = id => {
        const productos = carrito.filter(producto => producto.id !== id);

        //Colocar los productos en el state
        agregarProducto(productos)
    }

    return (
        <div>
            <h2> {nombre}</h2>
            <img className='img' src={foto} alt={nombre}/>
            <p className="precio"> U&#36;{precio}</p>

            {productos
                ?
                (<button
                    type="button"
                    onClick={() => seleccionarProducto(id)}>Comprar
                </button>)
                :
                (<button
                    type="button"
                    onClick={() => eliminarProducto(id)}
                >Eliminar
                </button>)
            }
        </div>
    )
}

export default Producto
