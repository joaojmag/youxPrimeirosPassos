// const num = [3, 2, 4, 9, 1, 1, 2, 8, 5]

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



