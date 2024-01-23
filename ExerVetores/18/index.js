let nomes = [2, 4, 1, 10, 4, 2, 1];


let quantidadeNomes = nomes.reduce(function (todosNomes, nome) {
  if (nome in todosNomes) {
    todosNomes[nome]++;
  } else {
    todosNomes[nome] = 1;
  }
  return todosNomes;
}, {});

//const valores = Object.values(quantidadeNomes)
//console.log(quantidadeNomes)

//console.log(valores)
let contador = 0;
for(let key in quantidadeNomes) {
  if(quantidadeNomes[key] > 1) {
    console.log(key);
    contador++;
  }
}
console.log(contador);