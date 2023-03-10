const sumar = (a: number, b: number): number => a + b

function multiplicar(numero: number, otroNumero?: number, base: number = 2) {
    return numero * base
}

// const resultado = sumar(20 , 30)
// const resultado = multiplicar(5,0 ,10)
// console.log(resultado)

interface PersonajeLOR {
    nombre: string,
    pv: number,
    mostrarHp: () => void
   
}

function curar(personaje: PersonajeLOR, curarX: number):void {
    personaje.pv += curarX
    console.log(personaje)
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Matias',
    pv: 50,
    mostrarHp(){
        console.log(`Puntos de vida ${this.pv}`)
    }
}

curar(nuevoPersonaje, 20)
nuevoPersonaje.mostrarHp()