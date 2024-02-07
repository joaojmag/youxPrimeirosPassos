class Pessoas {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    getNome() {
        return this.nome
    }

    getIdade() {
        return this.idade
    }

    setNome(nome) {
        this.nome = nome
    }

    setIdade(idade) {
        this.idade = idade
    }

    info() {
        console.log('Nome: ' + this.nome);
        console.log('Idade: ' + this.idade);
        console.log('---------------------------');
    }
}

let pessoas = [];

const btn_add = document.getElementById('btn_add')
const res = document.querySelector('.resposta')

const addPessoas = () => {
    res.innerHTML = ''
    pessoas.map(p => {
        const div = document.createElement('div')
        div.setAttribute('class', 'pessoa')
        div.innerHTML = `Nome: ${p.getNome()}<br/>Idade: ${p.getIdade()}`
        res.appendChild(div)
    })
}

btn_add.addEventListener('click', () => {
    const nome = document.querySelector('#f_nome')
    const idade = document.getElementById('f_idade')
    const p = new Pessoas(nome.value, idade.value)
    pessoas.push(p)
    nome.value = ''
    idade.value = ''
    nome.focus()
    console.log(pessoas);
    addPessoas();
})

