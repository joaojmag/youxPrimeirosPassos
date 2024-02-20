const listaAluno = [
    {
        nome: 'Walter',
        idade: 26,
        sexo: 'M'
    },
    {
        nome: 'Joao marcelo',
        idade: 32,
        sexo: 'M'
    },
    {
        nome: 'Jander',
        idade: 29,
        sexo: 'M'
    },
    {
        nome: 'Bianca',
        idade: 16,
        sexo: 'F'
    },
    {
        nome: 'Celeste',
        idade: 28,
        sexo: 'F'
    },
];

let soNomes = listaAluno.map((aluno) => {
    return 'M' == aluno.sexo
});
// for (let i = 0; i < listaAluno.length; i++) {
//     soNomes[i] = listaAluno[i].nome;
// }

console.log(soNomes);