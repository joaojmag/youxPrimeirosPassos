function cadastrar(usuario, usuarios) {
    let nomes = [...usuario, ...usuarios]
    console.log(nomes);
}

let usuarios = ['Matheus', 'Joao']

let novosUsuarios = cadastrar(usuarios, 'Pedro', 'Vitor')

let a = 'marcelo'
let { 2: indice3 } = a

console.log(indice3);