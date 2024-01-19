const vetBase = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const k = 5;
const elementosDeK = [1, 2, 3, 4, 5];
const posicaoElemento = 2;
let novoElemento = 9;

for (let i = 0; i < k; i++) {
    vetBase[i] = elementosDeK[i];
}

for (let j = posicaoElemento; j < vetBase.length; j++) {
    let salvaValor = vetBase[j]
    vetBase[j] = novoElemento;
    novoElemento = salvaValor;
}

console.log(vetBase)