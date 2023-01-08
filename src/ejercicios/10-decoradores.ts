
/*
    ===== Código de TypeScript =====
*/

//Decoradores sirven para cambiar las clases en el momento de que son definidas
//un decorador no es mas que una funcion que expande su clase anadiendole funcionalidades especiales
function classDecorator<T extends { new(...args: any[]): {} }>(
    contructor: T
) {
    return class extends contructor {
        newProperty = "new Property"
        hello = "override"
    }
}

@classDecorator
class MiSuperClase {
    public miPropiedad: string = 'ABC123'

    imprimir() {
        console.log('Hola Mundo')
    }
}

console.log(MiSuperClase)
const miClase = new MiSuperClase()
console.log(miClase.miPropiedad)