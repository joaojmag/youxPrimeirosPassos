const val1 = document.getElementById('val1').valueAsNumber
const val2 = document.getElementById('val2').valueAsNumber
const btmMias = document.getElementById('mais')
const btnMenos = document.getElementById('menos')
const btnVezes = document.getElementById('vezes')
const btnDivisao = document.getElementById('divisao')
const tela = document.querySelector('#tela')

const operadores = [
    (val1, val2) => val1 + val2,
    (val1, val2) => val1 - val2,
    (val1, val2) => val1 * val2,
    (val1, val2) => val1 / val2
]

btmMias.addEventListener('click', () => {
    let valor = operadores[0](val1, val2)
    tela.innerHTML = valor
})

btnMenos.addEventListener('click', () => {
    let valor = operadores[1](val1, val2)
    tela.innerHTML = valor
})

btnVezes.addEventListener('click', () => {
    let valor = operadores[2](val1, val2)
    tela.innerHTML = valor
})

btnDivisao.addEventListener('click', () => {
    let valor = operadores[3](val1, val2)
    tela.innerHTML = valor
})



// console.log(operadores[0](val1.valueAsNumber, val2.valueAsNumber));
// console.log(operadores[1](val1.valueAsNumber, val2.valueAsNumber));
// console.log(operadores[2](val1.valueAsNumber, val2.valueAsNumber));
// console.log(operadores[3](val1.valueAsNumber, val2.valueAsNumber));

// console.log('val1 :>> ', val1.valueAsNumber);
// console.log('val1 :>> ', val2.valueAsNumber);