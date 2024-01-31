let n = 0;
let max = 1000

// while (n < max) {
//     console.log('n :>> ', n);
//     if (n > 10)
//         break
//     n++
// }

// console.log('Fim Do programa :>> ');

let par = 0;


for (let i = n; i < max; i++) {
    // console.log('n :>> ', i);
    if (i % 2 != 0)
        continue
    par++

}

console.log('par :>> ', par);
console.log('Fim Do programa :>> ');

//continue para somente a interação atual e continual a executar!
let cont = 0;
for (let j = 0; j < 5; j++) {
    for (let i = 0; i < 5; i++) {
        console.log('i :>> ', i);
        cont++
        continue
    }
    console.log('j :>> ', j);
}
console.log('cont :>> ', cont);

function nome(){
console.log('object :>> ')}

nome()