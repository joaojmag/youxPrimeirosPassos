let num = 7;

let vetornumeros[0] = num;
let valor = 0;
do {
    let numM = multNum(num);
    let numS = numM.toString();
    let tamanhoS = numS.length;
    for (let i = 0; i < tamanhoS; i++) {
        vetornumeros[i] = stringNumero(numS[i]);
    }
    valor = stringNumero(numS);
    for (let j = 0; j < vetornumeros.length; j++) {
        multNum(vetornumeros[j])
    }
    console.log(numS);



} while (valor !== num && valor !== 1);


function multNum(numero) {
    return numero * numero
}

function stringNumero(valor) {
    return Number(valor)
}


let stringg = num.toString()

console.log(typeof stringg)


let numero = Number(stringg)

console.log(typeof numero)


console.log(vetornumeros);