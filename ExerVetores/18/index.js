const valores = [2, 4, 1, 10, 4, 2, 1];

let vetContador = [];
let contador = 0;

valores.forEach((e, j) => {
  if (valores.includes(e)){
    contador++;
    vetContador[j] = contador;   
  }
});

console.log(vetContador)

