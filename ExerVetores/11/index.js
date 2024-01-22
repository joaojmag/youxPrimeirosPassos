const n = 6;
const caracteres = ['a', 'b', 'c', 'd', 'e', 'f'];
const valorEntrada = ['f', 'c'];
let nova = [];
let boleano = false;

// for (let i in caracteres) {
//     if (caracteres[i] === valorEntrada[2]) {
//         boleano = false;
//     }
//     if (boleano) {
//         nova += caracteres[i] 
//     }
//     if (caracteres[i] === valorEntrada[0]) {
//         boleano = true;
//     }
// }

//console.log(caracteres.length)

// fiz mas não está 100% 

caracteres.forEach(element => {
    const isDelimitador = valorEntrada.includes(element);
    if(isDelimitador){
        boleano = !boleano;
    }
    if(boleano && !isDelimitador) {
        nova.push(element);
    }
});

console.log(nova)