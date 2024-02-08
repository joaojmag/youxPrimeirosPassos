const f_nome = document.getElementById('f_nome')
const f_idade = document.getElementById('f_idade')
const btn_add = document.getElementById('btn_add')
const resposta = document.querySelector('.resposta')

const Pessoas = {
    nome: '',
    idade: '',
    getNome: function () {
        return this.nome
    },
    getIdade: function () {
        return this.idade
    },
    setNome: function (nome) {
        this.nome = nome
    },
    setIdade: function (idade) {
        this.idade = idade
    }
}


addNomes = (pessoa) => {
    const div = document.createElement('div')
    div.setAttribute('class', 'pessoa')
    div.innerHTML = `Nome: ${pessoa[0][0]}</br> Idade: ${pessoa[0][1]}`
    resposta.appendChild(div)
    // console.log(pessoa);

}

btn_add.addEventListener('click', () => {
    let pessoa = []
    Pessoas.setNome(f_nome.value)
    Pessoas.setIdade(f_idade.value)
    p = [Pessoas.getNome(), Pessoas.getIdade()]
    pessoa.push(p)
    addNomes(pessoa)
    // console.log('pessoa :>> ', pessoa);
})