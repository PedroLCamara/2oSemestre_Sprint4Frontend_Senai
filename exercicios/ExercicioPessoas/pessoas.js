// Declarar uma variável qualquer, que receba um objeto vazio.
let Vazia = {};

/*
Declarar uma variável `pessoa`, que receba suas informações pessoais.
As propriedades e tipos de valores para cada propriedade desse objeto devem ser:
- `nome` - String
- `sobrenome` - String
- `sexo` - String
- `idade` - Number
- `altura` - Number
- `peso` - Number
- `andando` - Boolean - recebe "falso" por padrão
- `caminhouQuantosMetros` - Number - recebe "zero" por padrão
*/
var Pessoa = new Object();
Pessoa.Nome = '';
Pessoa.Sobrenome = '';
Pessoa.Sexo = '';
Pessoa.Idade = new Number();
Pessoa.Altura = new Number();
Pessoa.Peso = new Number();
Pessoa.Andando = false;
Pessoa.MetrosAndados = 0;

/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
*/
Pessoa.FazerAniversario = function(){
    Pessoa.Idade ++;
}


/*
Adicione um método ao objeto `pessoa` chamado `andar`, que terá as seguintes
características:
- Esse método deve receber por parâmetro um valor que representará a quantidade
de metros caminhados;
- Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando ao
valor dessa propriedade a quantidade passada por parâmetro;
- Ele deverá modificar o valor da propriedade `andando` para o valor
booleano que representa "verdadeiro";
*/
Pessoa.Andar = function(MetrosCaminhados){
    Pessoa.MetrosAndados += MetrosCaminhados;
    Pessoa.Andando = true;
}

/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/
Pessoa.Parar = function(){
    Pessoa.Andando = false;
}

/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/
Pessoa.NomeCompleto = function(){
    return "Olá! meu nome é "+Pessoa.Nome+" "+Pessoa.Sobrenome+"!";
}

/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/
Pessoa.MostrarIdade = function(){
    return "Olá, eu tenho "+Pessoa.Idade+" anos!";
}

/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/
Pessoa.MostrarPeso = function(){
    return "Eu peso "+Pessoa.Peso+"Kg";
}


/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/
Pessoa.MostarAltura = function(){
    return "Minha altura é "+Pessoa.Altura+"m";
}

/*
Agora vamos brincar um pouco com o objeto criado:
Qual o nome completo da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(Pessoa.NomeCompleto()); //string vazia ("Olá! meu nome é  !")

/*
Qual a idade da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(Pessoa.MostrarIdade()); //undefined ("Olá, eu tenho 0 anos!")

/*
Qual o peso da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(Pessoa.MostrarPeso()); //undefined ("Eu peso 0Kg")

/*
Qual a altura da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(Pessoa.MostarAltura()); //Minha altura é 0m

/*
Faça a `pessoa` fazer 3 aniversários.
*/
for(var i = 0; i < 3; i++){
    Pessoa.FazerAniversario();
}

/*
Quantos anos a `pessoa` tem agora? (Use a instrução para responder e
comentários inline ao lado da instrução para mostrar qual foi a resposta
retornada)
*/
console.log(Pessoa.MostrarIdade()); //Olá, eu tenho 3 anos!

/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com metragens diferentes passadas por parâmetro.
*/
Pessoa.Andar(2);
Pessoa.Andar(4);
Pessoa.Andar(6);

/*
A pessoa ainda está andando? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(Pessoa.Andando); // true ("true")

/*
Se a pessoa ainda está andando, faça-a parar.
*/
Pessoa.Parar();

/*
E agora: a pessoa ainda está andando? (Use uma instrução para responder e
comentários inline ao lado da instrução para mostrar a resposta retornada)
*/
console.log(Pessoa.Andando); //false

/*
Quantos metros a pessoa andou? (Use uma instrução para responder e comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/
console.log(Pessoa.MetrosAndados);

/*
Agora vamos deixar a brincadeira um pouco mais divertida! :D
Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
retornar a string:
- "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"
Só que, antes de retornar a string, você vai fazer algumas validações:
- Se o `sexo` de `pessoa` for "Feminino", a frase acima, no início da
apresentação, onde diz "eu sou o", deve mostrar "a" no lugar do "o";
- Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a
palavra "ano" ao invés de "anos", pois é singular;
- Se a quantidade de metros caminhados for igual a `1`, então a palavra que
deve conter no retorno da frase acima é "metro" no lugar de "metros".
- Para cada validação, você irá declarar uma variável localmente (dentro do
método), que será concatenada com a frase de retorno, mostrando a resposta
correta, de acordo com os dados inseridos no objeto.
*/
Pessoa.Apresentacao = function(){
    var ApresentacaoSexo = "eu sou o";
    var ApresentacaoIdade = "anos";
    var ApresentacaoMetros = "metros";
    if (Pessoa.Sexo === "Feminino") {
        ApresentacaoSexo = "eu sou a";    
    }
    if (Pessoa.Idade === 1) {
        ApresentacaoIdade = "ano";
    }
    if (Pessoa.MetrosAndados === 1) {
        ApresentacaoMetros = "metro";
    }
    return "Olá, "+ApresentacaoSexo+" "+Pessoa.Nome+" "+Pessoa.Sobrenome+", tenho "+Pessoa.Idade+" "+ApresentacaoIdade+", "+Pessoa.Altura+"m, meu peso é "+Pessoa.Peso+"Kg e, só hoje eu já caminhei "+Pessoa.MetrosAndados+" "+ApresentacaoMetros;
}

// Agora, apresente-se ;)
Pessoa.Nome = 'A';
Pessoa.Sobrenome = 'B';
Pessoa.Sexo = 'Feminino';
Pessoa.Idade = 1;
Pessoa.Altura = 25;
Pessoa.Peso = 900;
Pessoa.Andar(-11);
Pessoa.Parar();
console.log(Pessoa.Apresentacao());