class Pessoas{
    constructor(nome){
        this.nome = nome;
    }
}

const p1 = new Pessoas(10)
const p2 = new Pessoas('Marcelo')
const p3 = new Pessoas(11)
const p4 = new Pessoas('Garcia')

console.log(typeof p1.nome);
console.log(typeof p2.nome);
console.log(p3.nome);
console.log(p4.nome);