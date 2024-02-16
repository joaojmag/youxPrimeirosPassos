const objeto = {
    nome: 'Joao',
    sobrenome: 'Almeida',
    idade: 32
}


// let { nome } = objeto;

// console.log(nome);

// let { idade } = objeto

// console.log(idade);

// let { nome, idade } = objeto

// console.log(idade);
// console.log(nome);

let { nome: pedro } = objeto

console.log(pedro);

let vet = ['Marcelo', 'Garcia', 12]

let { 1: nomes } = vet
console.log(nomes);

let [nome1, nome2] = vet

console.log(nome1);
console.log(nome2);


function construir(valores) {
    let obb = {
        ...valores,
        tipos: 'todos',
        numeros: 13
    }
    console.log(obb);
}

construir({ nomes: 'Joao', sobrenome: 'Garcia' })

