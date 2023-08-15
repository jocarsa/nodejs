class Persona{
    constructor(){
        this.edad = 0
        this.nombre = "";
    }
    setEdad(nuevaedad){
        this.edad = nuevaedad
    }
    setNombre(nuevonombre){
        this.nombre = nuevonombre
    }
    saluda(){
        console.log("Hola, me llamo "+this.nombre+" y tengo "+this.edad)
    }
}

var persona1 = new Persona();
persona1.setEdad( 45 );
persona1.setNombre("Jose Vicente");
console.log(persona1);
persona1.saluda();