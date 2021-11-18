// //Crear variables
// var nombre = "Juan";


// if (nombre) {

//     var nombre = "Jorge";
//     console.log(`Bienvenido ${nombre}`);

// }
// var nombre = "Pedro";
// console.log(`Hola ${nombre}`);


const nombre = 'Juan'
const trabajo = 'Desarrollador Web'

// console.log(`Hola ${nombre} y tu trabajo es ${trabajo}`)

// const contenedorApp = document.querySelector('#app')
// let html = '<ul>'+
// '<li>Nombre:' +nombre+'</li>'+
// '<li>Trabajo:'+trabajo+'</li>'+
// '</ul>';
// contenedorApp.innerHTML = html;

//Function declaration
function saludar(nombre) {
    console.log(`Hola ${nombre}`);
}
saludar("Jorge")

//Function declaration
const contenedorApp = document.querySelector('#app')
let html = `<ul>
<li>Nombre: ${nombre}</li>
<li>Trabajo: ${trabajo}</li>
</ul>`;
contenedorApp.innerHTML = html;

