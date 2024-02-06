// function* cores(){
//     yield 'Vermelho'
//     yield 'Amarelo'
//     yield 'Rosa'
// }

//  const valor = cores()
// console.log(valor.next().value)
// console.log(valor.next().value)
// console.log(valor.next().value)



// function* pergunatas(){
//     const nome = yield 'Qual seu nome?'
//     const esporte = yield 'Qual seu esporte preferido?'
//     return 'Seu nome é ' + nome + ', e meu esporte é ' + esporte
// }

// const itp = pergunatas()
// console.log(itp.next().value);
// console.log(itp.next('João Marcelo').value);
// console.log(itp.next('Bike').value);


function* contador() {
    let i = 0;
    while (true) {
        yield i++
        if (i > 5)
            break
    }
}

const fun = contador();

for (i of fun) {
    console.log(i);
}



// function* contador() {
//     let i = 0;
//     while (true) {
//         yield i++
//     }
// }

// const fun = contador();

// for (let i = 0; i < 10; i++) {
//     console.log(fun.next().value);
// }
