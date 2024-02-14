class Carro {
    constructor(tipo, estagioTurbo) {
        this.turbo = new Turbo(estagioTurbo)
        if (tipo == 1) {
            this.velMax = 120
            this.nome = 'normal'
        } else if (tipo == 2) {
            this.velMax = 160
            this.nome = 'esportivo'
        } else if (tipo == 3) {
            this.velMax = 2000
            this.nome = 'super esportivo'
        }
        this.velMax += this.turbo
    }
}

class Turbo {
    constructor(e) {
        if (e == 0)
            this.pot = 0
        else if (e == 1)
            this.pot = 50
        else if (e == 2)
            this.pot = 75
        else if (e == 3)
            this.pot = 100
    }
}