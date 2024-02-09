const f_tipoMilitar = document.querySelector('#f_tipoMilitar')
const f_tipoNormal = document.querySelector('#f_tipoNormal')
const f_blindagem = document.getElementById('f_blindagem')
const f_municao = document.getElementById('f_municao')
const f_nome = document.getElementById('f_nome')
const f_portas = document.getElementById('f_portas')
const carros = document.getElementById('carros')
const btnaddCarro = document.querySelector('#btnaddCarro')

let a_carros = []

f_tipoMilitar.addEventListener('click', () => {
    f_nome.value = ''
    f_portas.value = 0
    f_blindagem.value = 0
    f_municao.value = 0
    f_blindagem.removeAttribute('disabled')
    f_municao.removeAttribute('disabled')
})

f_tipoNormal.addEventListener('click', () => {
    f_nome.value = ''
    f_portas.value = 0
    f_blindagem.value = 0
    f_municao.value = 0
    f_blindagem.setAttribute('disabled', 'disabled')
    f_municao.setAttribute('disabled', 'disabled')
})

const gerenciarExibicaoCarros = () => {
    carros.innerHTML = ''
    a_carros.forEach(c => {        
        const div = document.createElement('div')
        div.setAttribute('class', 'carro')

        div.innerHTML = `Nome: ${c.nome}<br/>`
        div.innerHTML += `Portas: ${c.portas}<br/>`
        div.innerHTML += `Cor: ${c.cor}<br/>`
        div.innerHTML += `Blindagem: ${c.blindagem}<br/>`
        div.innerHTML += `Munição: ${c.municao}<br/>`
        carros.appendChild(div)
    })
}

btnaddCarro.addEventListener('click', () => {
    if (f_tipoNormal.checked) {
        const c = new Carro(f_nome.value, f_portas.value)
        a_carros.push(c)
    } else {
        const m = new Militar(f_nome.value, f_portas.value, f_blindagem.value, f_municao.value)
        a_carros.push(m)
    }
    gerenciarExibicaoCarros()
})

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

class Militar extends Carro {// Classe Filho
    constructor(nome, portas, blindagem, municao) {
        super(nome, portas)
        this.blindagem = blindagem
        this.municao = municao
        this.setCor('Verde')
    }

    atirar = function () {
        if (this.municao > 0) {
            this.municao--
        }
    }
}

class Utilitario extends Carro {
    constructor(nome, portas, lugares) {
        super(nome, portas)
        this.lugares = lugares
    }
}

const c1 = new Carro('Nomrmal', 4)
c1.isLigar()
c1.setCor('Preto')

console.log(`Normal: ${c1.nome}`);
console.log(`Portas: ${c1.portas}`);
console.log(`Lidado: ${c1.ligado ? 'Sim' : 'Não'}`);
console.log(`Velocidade ${c1.vel}`);
console.log(`Cor ${c1.cor}`);
console.log('------------------------------------');

const c2 = new Militar('Lutador', 1, 100, 15)
c2.setCor('Azul')
c2.atirar()
c2.atirar()
console.log(`Normal: ${c2.nome}`);
console.log(`Portas: ${c2.portas}`);
console.log(`Lidado: ${c2.ligado ? 'Sim' : 'Não'}`);
console.log(`Velocidade ${c2.vel}`);
console.log(`Blingagem ${c2.blindagem}`);
console.log(`Munição ${c2.municao}`);

console.log(`Cor ${c2.cor}`);
console.log('------------------------------------');