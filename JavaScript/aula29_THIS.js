function aluno(nome, nota) {
    this.nome = nome;
    this.nota = nota;

    this.dados_anonimos = function () {
        setTimeout(function () {
            console.log(this.nome)
            console.log(this.nota)
        }, 2000)
    }

    this.dados_arrow = function () {
        setTimeout(() => {
            console.log(this.nome)
            console.log(this.nota)
        }, 2000)
    }
}
const a1 = new aluno('Joao', 23);
a1.dados_anonimos()
a1.dados_arrow()