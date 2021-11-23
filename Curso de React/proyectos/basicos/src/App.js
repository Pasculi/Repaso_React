import React, { useState } from 'react'
import Footer from "./components/Footer";
import Header from "./components/Header";
import Productos from './views/Producto';
import Carrito from './views/Carrito';
import './views/carrito.css'

function App() {

  //Crear estado de productos

  const [productos, guardarProductos] = useState([
    { id: 1, nombre: 'Polera ReactJS',foto:'https://ih1.redbubble.net/image.574929758.1248/ssrco,classic_tee,mens,101010:01c5ca27c6,front_alt,square_product,600x600.u1.jpg', precio: 50 },
    { id: 2, nombre: 'Polera Node.js',foto:'https://ih1.redbubble.net/image.1950808350.1137/ssrco,slim_fit_t_shirt,womens,fafafa:ca443f4786,front,square_product,600x600.jpg', precio: 40 },
    { id: 3, nombre: 'Polera VueJS',foto:'https://ih1.redbubble.net/image.1456913302.8636/ssrco,classic_tee,womens,101010:01c5ca27c6,front_alt,square_product,600x600.jpg', precio: 30 },
    { id: 4, nombre: 'Polera Angular',foto:'https://ih1.redbubble.net/image.387760931.4628/gptr,1265x,front,black-c,330,402,600,600-bg,f8f8f8.u3.jpg', precio: 20 },
    { id: 5, nombre: 'Polera Ninja FullStack',foto:'https://ih1.redbubble.net/image.597301053.5917/ssrco,mens_premium_t_shirt,mens,heather_grey,front,square_product,x600-bg,f8f8f8.1u1.jpg', precio: 60 }
  ]);

  //State para el carrito de compras

  const [carrito, agregarProducto] = useState([]);

  //Obtener la fecha

  const fecha = new Date().getFullYear();

  return (
    <div>
      <Header titulo='Tienda Virtual' />

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
