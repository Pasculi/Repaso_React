function Tarea(nombre, prioridad){
    this.nombre= nombre;
    this.prioridad = prioridad;
}
//Ceamos una instancia de Tarea
const tarea1 = new Tarea('Aprender Javascript y REACT', 'Alta')
const tarea2 = new Tarea('Aprender Mongodb', 'Media')
const tarea3 = new Tarea('Aprender Express', 'Baja')
const tarea4 = new Tarea('Aprender Node', 'Alta')

console.log(tarea1)
console.log(tarea2)
console.log(tarea3)
console.log(tarea4)