// let n1 = [10, 20, 30];
// let n2 = [12, 23, 33, 23];
// let n3 = [...n1, ...n2]
// const n4 = [...n2].reverse()
// const jogador1 = { nome: 'Joao', energia: 100, vida: 90, magia: 60 }
// const jogador2 = { nome: 'Marcelo', energia: 100, vida: 50, velocidade: 145 }
// const jogador3 = { ...jogador1, ...jogador2 }

// console.log('n1: ', n1)
// console.log('n2: ', n2)
// console.log('n3: ', n3)
// console.log('n4   ',n4)
// console.log('n2 :>> ', n2);


// const soma = (n1, n2, n3) => {
//     return n1 + n2 + n3
// }

// let valor = [1, 2, 3]

// console.log('soma :>> ', soma(...valor));


const objetos1 = document.getElementsByTagName('div')
const objetos2 = [...document.getElementsByTagName('div')]

const obj = objetos2.forEach(element => {
    element.innerHTML = 'ola';
    
});

console.log('objetos :>> ', objetos1);
console.log('objetos :>> ', objetos2);