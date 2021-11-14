## Exercicio - Compras no supermercado

O exercicio publicado é referente ao treinamento do BOOTCAMP - Desenvolvedor NodeJS - Ordenação e Filtro em JavaScript.[https://digitalinnovation.one](https://digitalinnovation.one)


#### Descrição do Desafio:

Pedro trabalha sempre até tarde todos os dias, com isso tem pouco tempo tempo para as tarefas doméstica. Para economizar tempo ele faz a lista de compras do supermercado em um aplicativo e costuma anotar cada item na mesma hora que percebe a falta dele em casa.

O problema é que o aplicativo não exclui itens duplicados, como Pedro anota o mesmo item mais de uma vez e a lista acaba ficando extensa. Sua tarefa é melhorar o aplicativo de notas desenvolvendo um código que exclua os itens duplicados da lista de compras e que os ordene alfabeticamente.


#### Entrada:

A primeira linha de entrada contém um inteiro N (N < 100) com a quantidade de casos de teste que vem a seguir, ou melhor, a quantidade de listas de compras para organizar. Cada lista de compra consiste de uma única linha que contém de 1 a 1000 itens ou palavras compostas apenas de letras minúsculas (de 1 a 20 letras), sem acentos e separadas por um espaço.


#### Saída:

A saída contém N linhas, cada uma representando uma lista de compra, sem os itens repetidos e em ordem alfabética.

Exemplos de Entrada  | Exemplos de Saída
------------- | -------------
2 | carne laranja picles suco
carne laranja suco picles laranja picles | laranja pera
laranja pera laranja pera pera |


#### Javascript

```javascript
//SOLUCAO 1
/*leitura da primeira linha, para saber quantidade de linhas que serão lidas na estrutura de repetição while()*/
let quantidadeItems = gets();
//o while() irá subtrair um numero a cada loop ate zerar, quando zerar o loop será interrompido
while ((quantidadeItems--)) {
    /*leitura da segunda linha em diante.Remove os espaços da lista e atribui os itens no array
    /*remove itens repetidos e atribui lista em um novo array*/
    let semItensRepetidos = gets().split(" ").filter((elemAtual, indexAtual, array) => indexAtual === array.indexOf(elemAtual));
    /*Ordena a lista em ordem crescente.Imprime a lista, com um espaço entre cada item*/
    console.log(semItensRepetidos.sort().join(" "));
}


//SOLUCAO 2
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
```

