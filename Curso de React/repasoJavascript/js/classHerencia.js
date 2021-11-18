class Tarea {
    constructor(nombre, prioridad) {
        this.nombre = nombre;
        this.prioridad = prioridad;
    }
    mostrar() {
        console.log (`${this.nombre} tiene una prioridad de ${this.prioridad}`);
    }
}

class ComprasPendientes extends Tarea {

    constructor(nombre, prioridad, cantidad) {
        super(nombre, prioridad, cantidad);
        this.cantidad = cantidad;
    }
    mostrar(){
        super.mostrar();
        console.log (` y una cantidad de ${this.cantidad}`);
    }
}

const tarea1 = new Tarea('Aprender Javascript', 'Alta')
const tarea2 = new Tarea('Preparar café', 'Alta')
const tarea3 = new Tarea('Pasear al perro', 'Media')
const tarea4 = new Tarea('Conocer a los suegras', 'Baja')

// console.log(tarea1.mostrar());
// console.log(tarea2.mostrar());
// console.log(tarea3.mostrar());
// console.log(tarea4.mostrar());

const comprar1 = new ComprasPendientes('Jabon', 'Urgente', 3);

comprar1.mostrar();