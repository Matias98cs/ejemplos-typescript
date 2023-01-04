
/*
    ===== Código de TypeScript =====
*/


//extends es mas que extender ciertas funcionalidades y ciertas propiedades
class PersonaNomral {
    constructor(public nombre: string, public direccion: string) { }
}
class Heroe extends PersonaNomral {
    // alterEgo: string //privada solo en esta clase
    // edad: number //public afuera de la clase se puede leer
    // nombreReal: number //static accede al valor del valor sin crear un instancia de la clase

    //el constructor es una funcion se llama cuando creao una instancia de la clase
    //Inyeccion de dependencias 'public alterEgo: string'
    constructor(public alterEgo: string, public edad: number, public nombreReal: string) {
        super(nombreReal, 'New York USA')
    }
}

const ironman = new Heroe('Ironman', 45, 'Tony');
console.log(ironman)