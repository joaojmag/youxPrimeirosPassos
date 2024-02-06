// const filtromaior18 = (elt) => {
//     if (elt >= 18) {
//         return elt
//     }
// }

const idades = [15, 34, 56, 12, 54, 2, 4, 6, 18];

const maior = idades.filter(elt => {
    if (elt >= 18) {
        return elt
    }
})

const menor = idades.filter(elt => {
    if (elt < 18) {
        return elt
    }
})

console.log('maior :>> ', maior);
console.log('idades :>> ', idades);
console.log('menor :>> ', menor);