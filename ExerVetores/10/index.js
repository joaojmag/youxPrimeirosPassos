const vet = [4, 6, 3, 9, 7, 10, 13];

const multi2 = vet.filter(e => e % 2 === 0);
const multi3 = vet.filter(e => e % 3 === 0);
const multi23 = vet.filter(e => e % 3 === 0 && e % 2 === 0);


console.log(multi2)
console.log(multi3)
console.log(multi23)