/* 
O operador & Bitwise faz a soma binaria (e)
Ex. 00001010    |
   +            |   lógica: 0 + 0 = 0
    00000110    |           1 + 1 = 1
________________|           0 + 1 = 0
    00000010    |
 */

let n1 = 10
let n2 = 11

let res = n1 & n2

console.log(res)

/* 
O operador | Bitwise faz a soma binaria (ou )
Ex. 00001010    |
   +            |   lógica: 0 + 0 = 0
    00000110    |           1 + 1 = 1
________________|           0 + 1 = 1
    00000010    |
 */

    let n10 = 10
    let n20 = 11
    
    let res0 = n10 | n20
    
    console.log(res0)


/* 
O operador ^ Bitwise faz a soma binaria (ou exclusivo)
Ex. 00001010    |
   +            |   lógica: 0 + 0 = 0
    00000110    |           1 + 1 = 0
________________|           0 + 1 = 1
    00000010    |
 */

    let n1b = 13
    let n2b = 14
    
    let resb = n1b ^ n2b
    
    console.log(resb)


/* 
O operador << ou >> Bitwise faz o deslocamento binaria
Ex. 00001010 << 1    |
   _______________   |   
    00010100         |


Ex. 00001010 >> 1    |
   _______________   |   
    00000101         |
 */

let n1a = 10
let n2a = 20
let resa = n1a << 1 /* esse dobra o valor */ 
console.log(resa)

resa = n2a >> 1  /* esse divide na metade o valor */
console.log(resa)