// const f = function (...valores) {
//     let rest = 0;
//     for (v of valores)
//         return rest += v
// }

// console.log('f(10,5) :>> ', f(10, 5));

// ==========================================================================
// Função construtor
const f = new Function('v1', 'v2', 'return v1+ v2')

console.log('f(5,10) :>> ', f(5, 10));