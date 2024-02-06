const valores = [10, 8, 6, 8, 5]
const it_valores = valores[Symbol.iterator]()

const texto = 'Youtube'
const it_texto = texto[Symbol.iterator]()


console.log(texto);
console.log(it_texto.next().value);
console.log(it_texto.next().value);
console.log(it_texto.next().value);
console.log(it_texto.next().done);
console.log(it_texto.next().done);
console.log(it_texto.next());
console.log(it_texto.next());
console.log(it_texto.next());
console.log(it_texto.next());



console.log();


console.log(valores)
console.log(it_valores.next().value)
console.log(it_valores.next().value)
console.log(it_valores.next().value)
console.log(it_valores.next().done)
console.log(it_valores.next())
console.log(it_valores.next())
console.log(it_valores.next())