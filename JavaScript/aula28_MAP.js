const converteInt = (e) => parseInt(e);
const dobrar = (e) => e * 2
let num = ['1', '2', '3', '4', '5', '6', '7', '8'].map(converteInt)
let nums = ['1', '2', '3', '4', '5', '6', '7', '8'].map(dobrar)
// const nums=  num.map(e => converteInt(e))
console.log('nums :>> ', num);
console.log('nums :>> ', nums);

// let el = document.getElementsByTagName('div')
// const val = Array.prototype.map.call(el, ({innerHTML})=>innerHTML)
// console.log('val :>> ', val);



// let elemento = document.getElementsByTagName('div')
// elemento = [...elemento]
// elemento.map((e,i)=>{
//     console.log('e :>> ', e.innerHTML);
//     e.innerHTML = 'Joao';
// })
// console.log('elemento :>> ', elemento);



// const nomes = ['jaoa', 'pedro', 'lucas', 'vitor'];
// const c = nomes.map((el, i) => {
//     return '<div>'+el+'</div>'
// })
// console.log('c :>> ', c);