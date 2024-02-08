class Carro { //Classe PAI
    constructor(nome, portas) {
        this.nome = nome
        this.portas = portas
        this.ligado = false
        this.vel = 0
        this.cor = undefined
    }
    isLigar = () => this.ligado = true
    isDesligado = () => this.ligado = false
    setCor = (cor) => this.cor = cor
}

const c1 = new Carro('Nomrmal', 4)

console.log('c1.nome :>> ', c1['nome']);
// console.log('portas :>> ', c1.portas);
// console.log('c1.lidado :>> ', c1.ligado);
// console.log('c1.vel :>> ', c1.vel);
// console.log('c1.cor :>> ', c1.cor);