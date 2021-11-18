const carrito = ['Producto 1', 'Producto 2', 'Producto 3']

console.log(carrito)

const appContenedor = document.querySelector('#app');


let html ='';
carrito.forEach(producto =>{
    html +=`<li>${producto}</li>`
})

appContenedor.innerHTML = html


actividades =['actividad 1', 'actividad 2', 'actividad 3']

actividades.map(actividades =>{
    return 'La actividad es '+ actividades
})

console.log(actividades)


const persona = {
    nombre:'Juan',
    profesion:'Desarrollador WEB',
    edad:50

}
console.log(Object.keys(persona))