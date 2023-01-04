interface Personaje  {
    nombre: string,
    hp: number,
    habilidades: string[],
    puebloNatal? : string
}

let habilidades: string[] = ['Bash','Counter', 'Healing']
const personaje: Personaje = {
    nombre: 'Strider',
    hp: 100,
    habilidades: ['Bash','Counter', 'Healing']
}

personaje.puebloNatal = 'Pueblo Natal'
console.log(`Esto es el personaje \n ${personaje.nombre} ${personaje.hp} ${personaje.habilidades}`)
console.table(personaje)


