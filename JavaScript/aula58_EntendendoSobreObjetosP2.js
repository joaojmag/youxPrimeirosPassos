class Carro {
    geral = 'Curso'
    constructor(nome, tipo) {
        this.nome = nome;
        if (tipo == 1) {
            this.tipo = 'Esportivo';
            this.velmax = 300;
        } else if (tipo == 2) {
            this.tipo = 'Utilitario';
            this.velmax = 100;
        } else if (tipo == 3) {
            this.tipo = 'Passeio';
            this.velmax = 150;
        } else {
            this.tipo = 'Militar';
            this.velmax = 80;
        }
    }

    getNome() {
        return this.nome
    }

    getTipo() {
        return this.tipo
    }

    getVelMax() {
        return this.velmax
    }

    setNome(nome) {
        this.nome = nome
    }

    setTipo(tipo) {
        this.nome = tipo
    }

    setVelMax(velmax) {
        this.nome = velmax
    }

    getInfo() {
        return [this.nome, this.tipo, this.velmax]
    }
    info() {
        console.log('Nome: ' + this.nome);
        console.log('Tipo: ' + this.tipo);
        console.log('Velocidade: ' + this.velmax);
        console.log('Geral: ' + this.geral);
        console.log('-----------------------------');
    }
}

const c1 = new Carro('carro1', 1)
const c2 = new Carro('Marcelo', 2)
const c3 = new Carro('11', 3)
const c4 = new Carro('Garcia', 4)

// console.log(c1.nome);
// console.log(c2.nome);
// console.log(c3.nome);
// console.log(c4.nome);

// console.log(c4);

c1.setNome('Vitor')
c1.info()

// console.log(c1.getNome());
// console.log(c1.getTipo());
// console.log(c1.getVelMax());

// console.log(c2.getInfo());