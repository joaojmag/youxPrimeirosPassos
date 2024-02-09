const Nave = function (energia) {
    this.energia = energia
    this.disparos = 100
}

Nave.prototype.vida = 3

Nave.prototype.disparar = function() {
    if (this.disparos > 0)
        this.disparos--
}

const n1 = new Nave(150)

n1.disparar()
n1.disparar()
n1.disparar()
n1.disparar()
n1.disparar()

console.log(Nave);
console.log(n1);
console.log(n1.energia);
console.log(n1.vida);
console.log(n1.disparos);

