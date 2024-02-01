const somar = val => {
    let rest = 0;
    for (let iterator of val) {
        rest += iterator;
    }
    return rest;
}

const soma = (...valores) => {
    return somar(valores)
}

console.log(soma(3, 2, 5, 3, 4, 5, 6));