const palavra = 'abcdefghijklmnop';
let conta = 0;

for (let e of palavra) {
    if (e !== 'a' && e !== 'e' && e !== 'i' && e !== 'o' && e !== 'u') {
        conta += 1
    }
}
console.log(palavra.length)
console.log(conta);