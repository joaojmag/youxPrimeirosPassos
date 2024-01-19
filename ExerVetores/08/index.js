const tamanhoVet = 5;
const vet = [12, 34, 56, 78, 90];
const valorInserido = 12;

if (vet.includes(valorInserido)) {
    const novoVet = vet.filter(e => e !== valorInserido);
    console.log(novoVet);
} else {
    console.log('ELEMENTO NAO ENCONTRADO')
}


console.log(vet);