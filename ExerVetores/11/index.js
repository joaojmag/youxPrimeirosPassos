const n = 6;
const caracteres = 'a b c d e f';
const valorEntrada = 'c f';
let nova = '';
let boleano = false;

for (let i in caracteres) {
    if (caracteres[i] === valorEntrada[2]) {
        boleano = false;
    }
    if (caracteres[i] === valorEntrada[0]) {
        boleano = true;
    }
    if (boleano) {
        nova += caracteres[i] 
    }
}

console.log(caracteres.length)
console.log(nova)
// fiz mas não está 100% 