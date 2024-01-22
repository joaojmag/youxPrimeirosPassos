const v1 = [1, 2, 3, 4, 5, 67, 8, 9];
const v2 = [4, 54, 34, 767, 8];

const valor = v1.filter(e => v2.includes(e));

console.log(valor)