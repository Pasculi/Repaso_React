function mostrarTareas(tarea, prioridad){
    return `La Tarea ${tarea} tiene una prioridad de ${prioridad}`;
}


const persona ={
    nombre:'Juan',
    profesion:'Desarrollador Web',
    edad: 500
}
console.log(persona)
// console.log(persona.mostrarTareas())

// const mostrarCliente = mostrarTareas(persona.nombre, persona.profesion)

// console.log(mostrarCliente)

function Tarea(nombre, prioridad){
    this.nombre= nombre;
    this.prioridad = prioridad;
}

Tarea.prototype.mostrarTareas=function(){
    return (`La tarea ${this.nombre} tiene una urgencia de ${this.prioridad}`)
}
//Ceamos una instancia de Tarea
const tarea1 = new Tarea('Aprender Javascript y REACT', 'Alta')
const tarea2 = new Tarea('Aprender FIREBASE y lOCALsTORAGE', 'Alta')

const mostrarInfo = mostrarTareas(tarea1.nombre, tarea1.prioridad)
console.log(tarea1)
console.log(tarea1.mostrarTareas())
console.log(tarea2.mostrarTareas())
console.log(persona.profesion)