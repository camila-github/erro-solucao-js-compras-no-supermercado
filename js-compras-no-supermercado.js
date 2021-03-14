//SOLUCAO 1
let quantidadeItems = gets();
while ((quantidadeItems--)) {
    let semItensRepetidos = gets().split(" ").filter((elemAtual, indexAtual, array) => indexAtual === array.indexOf(elemAtual));
    console.log(semItensRepetidos.sort().join(" "));
}


//SOLUCAO 2
let totalItems = gets();
for (var i = 0; i < totalItems; i++) {
    let itensLinha = gets().split(" ");
    let semItensRepetidos = itensLinha.filter((elem, index, self) => {
        return index === self.indexOf(elem);
    });
    console.log(semItensRepetidos.sort().join(" "));
}



