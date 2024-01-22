const vet = [1, 2, 3, 4, 5, 6, 12, 34, 56, 76, 99];
let indexCentral;
let numeroCentral;

if (vet.length % 2 === 1) {
    indexCentral = ((vet.length - 1) / 2);
    numeroCentral = vet[indexCentral];
} else {
    indexCentral = -1;
    numeroCentral = -1;
}


let maior = vet[0] - 1;
let indexMaior;
let menor = vet[0] + 1;
let indexMenor;

vet.forEach((valor, index) => {
    if (valor > maior) {
        maior = valor;
        indexMaior = index;
    }

    if (valor < menor) {
        menor = valor;
        indexMenor = index;
    }
});

console.log(`
${maior}
${menor}
${numeroCentral}
${indexMaior}
${indexMenor}
${indexCentral}
`)

