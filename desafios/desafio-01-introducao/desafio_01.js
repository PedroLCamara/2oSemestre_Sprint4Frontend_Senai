// Declarar uma variável chamada `myvar`, sem valor.
//

var MyVar;
console.log('MyVar: '+MyVar);

// Após declarada, atribua o valor 10 à variável `myvar`.
//

MyVar = 10;
console.log('MyVar: '+MyVar);

// Declare uma nova variável chamada `soma`, e adicione uma instrução somando os valores 
//

var Soma = 0;
Soma += MyVar;
console.log('MyVar: '+MyVar);
console.log('Soma: '+Soma);

// Atribua à variável `soma` todo o valor dela, somando 1, usando o operador de soma abreviado.
//

Soma ++;
console.log('Soma: '+Soma);

// Atribua à variável `soma` todo o valor dela, multiplicando por 3, usando o operador de multiplicação abreviado.
//

Soma *= 3;

// Qual é o valor da variável `soma` até aqui?
//

console.log('Soma: '+Soma);

// Declare uma variável chamada `souninja`, atribuindo à ela o valor booleano que representa `verdadeiro`.
//

var SouNinja = true;
console.log('SouNinja: '+SouNinja);

// Declare uma variável chamada `comida` que recebe um array com os valores 'arroz', 'feijão' e 'ovo'.
//

var Comida = ['arroz', 'feijão', 'ovo'];
console.log('Comida[]: ' + Comida[0] + ', ' + Comida[1] + ' e ' + Comida[2]);

// Digite a instrução que imprime o valor de 'feijao', que está na variável `comida`.
//

console.log('Comida[1]: ' + Comida[1]);
//Ou
console.log('Comida["feijão"]: ' + Comida[Comida.indexOf('feijão')]);

// Digite o código que verifica se a variável `soma' é igual a variável `myvar` (testando também o tipo).
//

if(Soma === MyVar){
    console.log(Soma + ' E ' + MyVar + 'SÃO ESTRITAMENTE IGUAIS!!!')
}
else console.log(Soma + ' E ' + MyVar + ' NÃO SÃO ESTRITAMENTE IGUAIS!!!');

// Digite o código que verifica se a variável `myvar` é menor ou igual à variável `soma`.
//

if(MyVar <= Soma){
    console.log(MyVar + ' É MENOR OU IGUAL A ' + Soma);
}
else console.log(MyVar + ' NÃO É MENOR OU IGUAL A ' + Soma);

// Crie uma função chamada `divisao` que receba como parâmetro dois números, e retorne o resultado da divisão entre eles.
//

function Divisao(Dividendo, Divisor){
    return Dividendo / Divisor;
}

// Invoque a função criada acima, passando os parâmetros 10 e 2.
// 

console.log('10 dividido por 2 é igual a: ' + Divisao(10, 2));