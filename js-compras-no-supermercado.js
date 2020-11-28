//SOLUCAO 1
let totalItems = gets();
for (var i = 0; i < totalItems; i++) {
    let itensLinha = gets().split(" ");
    let semItensRepetidos = itensLinha.filter((elem, index, self) => {
        return index === self.indexOf(elem);
    });
    console.log(semItensRepetidos.sort().join(" "));
}

//SOLUCAO 2 - Resumido
let totalItems = gets();
while ((totalItems--)) {
    let semItensRepetidos = gets().split(" ").filter((elem, index, self) => index === self.indexOf(elem));
    console.log(semItensRepetidos.sort().join(" "));
}