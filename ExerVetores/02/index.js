/* const v1 = [20, 24, 25, 31, 34, 38, 40, 52, 1, 3];
const v2 = [2, 15, 3, 4, 7];

function valoresDivisiveis() {
    for (let i of v1) {
        contador = 0;
        for (let j of v2) {
            if (i % j === 0) {
                contador++
            }
        }
        console.log(`${i} ${contador}`)
    }
}

valoresDivisiveis(); */
const v1 = [20, 24, 25, 31, 34, 38, 40, 52, 1, 3];
const v2 = [2, 15, 3, 4, 7];

// function valoresDivisiveis() {
//     const novoVetor = v1.map((val) => {
//         let contador = 0;
//         for (i of v2) {
//             if ((val % i) === 0) {
//                 contador++
//             }
//         }
//         return `${val} ${contador}`
//     })
//     console.log(novoVetor)
// }

function valoresDivisiveis() {
    const novoVetor = v1.map((val) => {
        const resultado = v2.filter(e => (val % e) === 0);
        return `${val} ${resultado.length}`
    })
    console.log(novoVetor)
}

valoresDivisiveis();