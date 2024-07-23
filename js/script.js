'use stric';

let special = [
    {
        caracteristica : 'Fuerza',
        puntuacion : 'numero'
    },
    {
        caracteristica : 'Precision',
        puntuacion : 'numero'
    },
    {
        caracteristica : 'Resistencia',
        puntuacion : 'numero'
    },
    {
        caracteristica : 'Carisma',
        puntuacion : 'numero'
    },
    {
        caracteristica : 'Inteligencia',
        puntuacion : 'numero'
    },
    {
        caracteristica : 'Agilidad',
        puntuacion : 'numero'
    },
    {
        caracteristica : 'Suerte',
        puntuacion : 'numero'
    }
]




function rollDie(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

function roll2d20(numeroObjetivo) {
    const primeraTirada = rollDie(20);
    const segundaTirada = rollDie(20);
    const resultados = [primeraTirada, segundaTirada];
    
    let exito = 0;
    let complicacion = 0;
    let critico = 0;
    
    resultados.forEach(roll => {
        if (roll <= numeroObjetivo) exito++;
        if (roll === 20) complicacion++;
        //if (roll <= habilidad) critico++;
    });
    
    return { resultados, exito, complicacion };
}

//let numeroObjetivo = [caracteristica, habilidad]
const numeroObjetivo = 12; // Número objetivo para la tirada
const { resultados, exito, complicacion } = roll2d20(numeroObjetivo);

console.log(`Los resultados de los dados son: ${resultados}`);
console.log(`Número de éxitos: ${exito}`);
console.log(`Número de complicaciones: ${complicacion}`);