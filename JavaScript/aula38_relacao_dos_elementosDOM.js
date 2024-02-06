const caixa1 = document.querySelector('#caixa1')
const btc_c = [...document.querySelectorAll('.curso')]
const c1_2 = document.querySelector('#c1_2')

console.log(c1_2.parentNode.parentNode.parentNode.children[4].innerHTML); // com esse exemplo podemos ver como posso voltar na arvore DOM

// console.log(caixa1.hasChildNodes()); // verifica se tem um filho

// if (caixa1.children.length > 0) {
//     console.log('Possui filhos');
// } else {
//     console.log('Não possui filhos');
// }
// console.log(caixa1.children.length > 0 ? 'Possui filhos' : 'Não possui filhos'); // uma outra forma de fazer 

// console.log(caixa1.firstElementChild.innerHTML = 'teste'); // para mudar o 1 elemento
// console.log(caixa1.children[1].innerHTML = 'mudou o 2'); // para mudar o 2 elemento

// console.log(document.getRootNode());
// console.log(btc_c[0].ownerDocument);
// console.log(caixa1.firstElementChild);
// console.log(caixa1.lastElementChild);
// console.log(caixa1.children);

