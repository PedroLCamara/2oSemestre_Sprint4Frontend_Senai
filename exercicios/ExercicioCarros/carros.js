/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var IsTruthy = Argumento => {
    return !!Argumento;
}

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
console.log(IsTruthy(false));
console.log(IsTruthy(null));
console.log(IsTruthy(undefined));
console.log(IsTruthy(0));
console.log(IsTruthy(NaN));
console.log(IsTruthy(''));

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
console.log(IsTruthy(true));
console.log(IsTruthy({}));
console.log(IsTruthy([]));
console.log(IsTruthy(42));
console.log(IsTruthy("iowehnoigh"));
console.log(IsTruthy(new Date()));
console.log(IsTruthy(-42));
console.log(IsTruthy(3.14));
console.log(IsTruthy(-3.14));
console.log(IsTruthy(Infinity));

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
let Carro = new Object();
Carro.Marca = '';
Carro.Modelo = '';
Carro.Placa = '';
Carro.Ano = new Number();
Carro.Cor = '';
Carro.QuantPortas = new Number();
Carro.Assentos = 5;
Carro.QuantPessoas = 0;

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
Carro.MudarCor = NovaCor => Carro.Cor = NovaCor;

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
Carro.ObterCor = () => { return Carro.Cor }

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
Carro.ObterModelo = () => { return Carro.Modelo }

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
Carro.ObterMarca = () => { return Carro.Marca }

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
Carro.ObterMarcaModelo = () => { return "Esse carro é um "+ObterMarca()+" "+ObterModelo() }

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
Carro.AdicionarPessoas = NumPessoas => {
    let ConsultaEspaco = NumPessoas + Carro.QuantPessoas;
    if (Carro.QuantPessoas == Carro.Assentos && NumPessoas > 0) {
        return "O carro já está lotado!!!"
    }
    else if (ConsultaEspaco > Carro.Assentos) {
        if ((Carro.Assentos - Carro.QuantPessoas) == 1) {
            return "Só cabe mais uma pessoa!";
        }
        else return "Só cabem mais "+(Carro.Assentos - Carro.QuantPessoas)+" pessoas!";
    }
    else{ 
        Carro.QuantPessoas += NumPessoas; 
        return "Já temos "+Carro.QuantPessoas+" pessoas no carro!"
    }
}

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
console.log(Carro.ObterCor()); // string vazia ("")

// Mude a cor do carro para vermelho.
Carro.MudarCor('Vermelho'); 

// E agora, qual a cor do carro?
console.log(Carro.ObterCor()); // "Vermelho"

// Mude a cor do carro para verde musgo.
Carro.MudarCor('Verde musgo'); 

// E agora, qual a cor do carro?
console.log(Carro.ObterCor()); // "Verde musgo"

// Qual a marca e modelo do carro?
console.log(Carro.ObterMarca()); // string vazia ("")
console.log(Carro.ObterModelo()); // string vazia ("")

// Adicione 2 pessoas no carro.
console.log(Carro.AdicionarPessoas(2)); //"Já temos 2 pessoas no carro!"

// Adicione mais 4 pessoas no carro.
console.log(Carro.AdicionarPessoas(4)); //"Só cabem mais 3 pessoas!"

// Faça o carro encher.
console.log(Carro.AdicionarPessoas(3)); //"Já temos 5 pessoas no carro!"
console.log(Carro.AdicionarPessoas(1)); //"O carro já está lotado!!!"

// Tire 4 pessoas do carro.
console.log(Carro.AdicionarPessoas(-4)); //"Já temos 1 pessoas no carro!"

// Adicione 10 pessoas no carro.
console.log(Carro.AdicionarPessoas(10)); //"Só cabem mais 4 pessoas!"

// Quantas pessoas temos no carro?
console.log(Carro.QuantPessoas); // 1
