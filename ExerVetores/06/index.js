const temperatura = [24.4, 27.1, 34.7, 12.3, 43.1, 32.0, 8.1, 34.7, 32.6, 23.3, 11.9, 14.7];
const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

function maisQuenteEFrio() {
    let maior = temperatura[0] - 1;
    let indexMaior;
    let menor = temperatura[0] + 1;
    let indexMenor;

    temperatura.forEach((valor, index) => {
        if (valor > maior) {
            maior = valor;
            indexMaior = index;
        }

        if (valor < menor) {
            menor = valor;
            indexMenor = index;
        } 
    });
    console.log(`maior: ${meses[indexMaior]} ${maior}°C  | menor: ${meses[indexMenor]} ${menor}°C `)
}


maisQuenteEFrio();

//Outras formas de acahr maior e menor
//
// var arr = ["885.9", "984.9", "444.9", "528.9", "528.9"];
// var min = Math.min(...arr);
// var max = Math.max(...arr);


// console.log(min); // 444.9
// console.log(max);

// var arr = ["885.9", "984.9", "444.9", "528.9", "528.9"];
// var max = arr.map(Number).reduce(function(a, b) {
//   return Math.max(a, b);
// });

// console.log(max);