

// console.log('Hola Mundo! Matias');

/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen: number
    segundo: number
    cancion: string
    detalle: Detalle
}

interface Detalle {
    autor: string
    year: number
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalle: {
        autor: 'Ed Sheeran',
        year: 2015
    }
}
// const autor = 'Fulano'

const {volumen, segundo, cancion, detalle} = reproductor
const {autor: autorDetalle, year} = detalle

console.log(`Volumen: ${volumen}`)
console.log(`Segundo: ${segundo}`)
console.log(`Cancion: ${cancion}`)
console.log(`Detalles: \n Autor: ${autorDetalle} \n Year: ${year}`)