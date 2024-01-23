// const valores = [2, 4, 1, 10, 4, 2, 1];

// const moda = valores.reduce()


// let novoVet = [];
// let numCont = [];

// for (let i in valores){
//     let contador = 0;
//     for(let j in valores){
//         if (valores[i] === valores[j]){
//             contador += 1;
//         }
//     }
//     numCont.push(contador);
// }

// console.log(numCont);




let nomes = [2, 4, 1, 10, 4, 2, 1];


//let nomes = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];

let quantidadeNomes = nomes.reduce(function (todosNomes, nome) {
  if (nome in todosNomes) {
    todosNomes[nome]++;
  } else {
    todosNomes[nome] = 1;
  }
  return todosNomes;
}, {});

const valores = Object.values(quantidadeNomes)
console.log(quantidadeNomes)

let  contaMais = 0;
let varIn = valores[0]
for (let i of valores) {
  if (i === varIn){
    contaMais++

  }
}