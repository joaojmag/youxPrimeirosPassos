const vetA = [5, 6, 7, 8, 9];
const vetB = [5, 4, 3, 2, 1];

function subtracao() {
    vetB.reverse();
    const newVet = [];
    for (let i in vetA) {
        newVet.push(vetA[i] - vetB[i]);
    }
    return newVet;
}

const somatorio = subtracao().reduce((anterior, posterior) => {
    return anterior + posterior
})

console.log(somatorio);