/* // const num = [3, 2, 4, 9, 1, 1, 2, 8, 5]

// const remove = 5;

// console.log(num.length)

const num = [5, 2, 7, 9, 0]
const remove = 2;
const resto = num.length - remove;
let novoVetor = [];



for (let j in num) {
    let novoNum = [];
    for (let i in num) {
        //if (i < resto) {
        novoNum.push(num[i]);
        if (novoNum.length === resto) {
            novoVetor.push(trasNumero(novoNum));
        }
        console.log(i)
        // }

    }
}


console.log(resto)
console.log(novoVetor)

function trasNumero(numeros) {
    let valor = numeros.reduce((accumulator, number) => `${accumulator}${number}`);
    return Number(valor);
}



 */

// let A = [3, 2, 4, 9, 1, 1, 2, 8, 5]//[2, 3, 9, 3, 8, 2, 3, 4, 3];
// let retirar = 5;

// let ordena = [...A];
// ordena.sort(function (a, b) {
//     return b - a;
// });
// ordena.length = ordena.length - retirar;
// let arrayIndex = []
// ordena.forEach((item, index) => {
//     let indice = A.indexOf(item)
//     if (indice != -1) {
//         arrayIndex.push(indice);
//     }
// })
// arrayIndex.forEach(index => {
//     console.log(A[index])
// })

//324911285
//239382343
let num = 324911285;//239382343;//14413254125;
const remocoes = 5;

console.log("numAntes  :>> ", num);

for (let i = 1; i <= remocoes; i++) {
    let maiorNum = 0;
    let baseDez = 1;

    while (parseInt(num / baseDez) > 0) {
        const numRemovido =
            parseInt(num / (baseDez * 10)) * baseDez + (num % baseDez);

        baseDez *= 10;

        maiorNum = Math.max(maiorNum, numRemovido);
    }

    num = maiorNum;
}

console.log("numDepois :>> ", num);