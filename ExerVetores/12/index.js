const texto = '1227221' // verificar se é um palíndromo numerico.
let result = 0;

for (let i in texto) {
    if (texto[i] === texto[texto.length - 1 - i]) {
        result += 1;
        if (result === texto.length) {
            console.log(1);
            break;
        }
    } else {
        console.log(0);
        break;
    }
}



console.log(texto.length)

