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


const meninos = filtro('M');

const meninas = filtro('F');

console.log('meninos: >', meninos)
console.log('meninas: >>', meninas)


function filtro(valor) {
    let novoObjeto = listaAluno.filter((aluno) => {
        return valor == aluno.sexo
    });

    novoObjeto = novoObjeto.map((aluno) => {
        return aluno.nome
    })
    
    return novoObjeto;

    

}

let soMeninos = filtro('M');

let soMeninas = filtro('F');


console.log(soMeninos)
console.log(soMeninas)
