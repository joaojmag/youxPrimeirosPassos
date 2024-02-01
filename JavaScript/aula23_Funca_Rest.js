function soma(...valore) {
    // let tam = valore.length;
    let res = 0;
    // for (let i = 0; i < tam; i++) {
    //     res += valore[i]
    // }

    for (let iterator of valore) {
        res += iterator
    }
    return res
}

console.log(soma(2, 4, 3, 3, 3, 3, 3, 4, 4))