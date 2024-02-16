let nomes = ['Joao', 'Marcelo', 'Garcia']

console.log(nomes.includes('Joao'));

let a = 'Marcelo'

let b = nomes.filter(e => e.endsWith('ao'))

console.log(b);

let c = nomes.filter(e => e.startsWith('Ga'))
console.log(c);
