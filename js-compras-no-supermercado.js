//SOLUÇÃO 1
/*leitura da primeira linha, para saber a quantidade de listas que serão lidas na estrutura de repetição for()*/
let totalItems = gets();
for (var i = 0; i < totalItems; i++) {
    /*leitura da segunda linha em diante.Remove os espaços da lista e atribui os itens no array*/
    let itensLinha = gets().split(" ");

    /*remove itens repetidos e atribui lista em um novo array*/
    let semItensRepetidos = itensLinha.filter((elem, index, self) => {
        return index === self.indexOf(elem);
    });

    /*ordena a lista em ordem crescente.imprime a lista, com um espaço entre cada item*/
    console.log(semItensRepetidos.sort().join(" "));
}

//SOLUÇÃO 2 - Resumido
/*leitura da primeira linha, para saber quantidade de linhas que serão lidas na estrutura de repetição while()*/
let totalItems = gets();
//o while() irá subtrair um numero a cada loop ate zerar, quando zerar o loop será interrompido
while ((totalItems--)) {
    /*leitura da segunda linha em diante.Remove os espaços da lista e atribui os itens no array
    /*remove itens repetidos e atribui lista em um novo array*/
    let semItensRepetidos = gets().split(" ").filter((elem, index, self) => index === self.indexOf(elem));

    /*Ordena a lista em ordem crescente.Imprime a lista, com um espaço entre cada item*/
    console.log(semItensRepetidos.sort().join(" "));
}