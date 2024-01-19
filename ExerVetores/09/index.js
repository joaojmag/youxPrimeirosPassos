const numeros = [9.4, 2.5, 1, 5.9, 1.6, -1, -6.7, -8.1, -2.3, -9.5];
const numNeg = numeros.filter(e => e < 0);
const numPos = numeros.filter(e => e >= 0).reduce((n1, n2) => n1 + n2);

console.log(numNeg.length);
console.log(numPos.toFixed(1))