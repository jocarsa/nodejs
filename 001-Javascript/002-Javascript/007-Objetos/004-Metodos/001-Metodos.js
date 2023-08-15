class Persona{
    constructor(){
        this.edad = 0
        this.nombre = "";
    }
    saluda(){
        console.log("Hola, me llamo "+this.nombre+" y tengo "+this.edad)
    }
}

var persona1 = new Persona();
console.log(persona1);
persona1.saluda();