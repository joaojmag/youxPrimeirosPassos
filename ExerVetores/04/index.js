vet = [1, 3, 5, -6, 3, -8, -9, -3, 8, 0];


function separacaoVet() {
    const vetPsi = [];
    const vetNeg = [];
    vet.forEach(element => element < 0 ? vetNeg.push(element) : vetPsi.push(element));
    console.log(vetPsi);
    console.log(vetNeg);
}

separacaoVet()