import React, { useState } from 'react'
import Footer from "./components/Footer";
import Header from "./components/Header";
import Productos from './components/Producto';
import Carrito from './views/Carrito';
import Celula from './views/Celula';
import './views/carrito.css'

function App() {

  //Crear estado de productos

  const [productos, guardarProductos] = useState([
    { id: 1, nombre: 'Camisa ReactJS', precio: 50 },
    { id: 2, nombre: 'Polera Node.js', precio: 40 },
    { id: 3, nombre: 'Blusa VueJS', precio: 30 },
    { id: 4, nombre: 'Poleron Angular', precio: 20 }
  ]);

  //State para el carrito de compras

  const [carrito, agregarProducto] = useState([]);

  //Obtener la fecha

  const fecha = new Date().getFullYear();

  return (
    <div>
      <Header titulo='Tienda Virtual' />
      <Celula />
      <h1>Lista de Productos</h1>
      {productos.map(producto => (
        <Productos
          key={producto.id}
          producto={producto}
          productos={productos}
          carrito={carrito}
          agregarProducto={agregarProducto}
        />

      ))}
      <Carrito
        carrito={carrito}
        agregarProducto={agregarProducto}
      />

      <Footer fecha={fecha} />

    </div>
  );
}

export default App;
