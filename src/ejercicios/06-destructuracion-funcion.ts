

// console.log('Hola Mundo! Matias');

/*
    ===== Código de TypeScript =====
*/

interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'Ipone',
    precio: 400
}

const tableta: Producto = {
    desc: 'Apple Ipad',
    precio: 350
}

function calculaISV(productos: Producto[]): [number, number] {
    let total = 0
    productos.forEach(({precio}) => {
        total += precio
    })

    return [total ,total * 0.15]
}
const articulos = [telefono, tableta]

const [total, isv] = calculaISV(articulos)
console.log(`total: ${total}`)
console.log(`ISV: ${isv}`)