const vet1 = [1234, 1235, 1236, 1237, 1238, 1239];
const vet2 = [1234, 1235, 1236, 1231, 1233, 1239, 1235];

const valor = vet1.filter(e => vet2.includes(e));
console.log(valor);