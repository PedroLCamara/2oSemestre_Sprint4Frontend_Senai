import './App.css';
import React from 'react';

// Define um componente funcional DataFormatada que retorna o subtítulo com o valor da hora formatado
function DataFormatada(props) {
  return <h2>Horário Atual: {props.date.toLocaleTimeString()}</h2>
}

// Componente de classe
// Define a classe Clock que será chamada dentro da renderização do componente App
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Define a propriedade date pegando a data e hora atual
      date: new Date(),
      
      //Variável booleana para definir se o relógio está pausado ou não
      pausado: false
    };
  };

  // Define a função thick() que atualiza a propriedade date com a data e hora atual
  // toda vez que a função for invocada
  thick() {
    if (this.state.pausado === false) {
      this.setState({
        date: new Date()
      })
    }
  };

  //Função que muda o valor de pausado para true
  Pausar() {
    this.setState({
      pausado: true
    });
    console.log('relógio '+this.timerID+' pausado');
  };

  //Função que muda o valor de pausado para false
  Retomar() {
    this.setState({
      pausado: false
    });
    console.log('relógio '+this.timerID+' despausado');
  };

  // Ciclo de vida que ocorre quando o componente Clock é inserido na árvore DOM
  // ou seja, o ciclo de vida de montagem/nascimento
  componentDidMount() {
      this.timerID = setInterval(() => {
        this.thick()
      }, 1000);
    
    // Exibe no console o ID de cada relógio
    console.log('Eu sou o relógio ' + this.timerID);
  };

  // Ciclo de vida que ocorre quando o componente Clock é removido da árvore DOM
  // ou seja, o ciclo de vida da desmontagem/morte
  // Quando isso ocorre, a função clearInterval limpa o relógio criado pela função
  // setInterval
  componentWillUnmount() {
    clearInterval(this.timerID);
  };


  // Renderiza o conteúdo do retorno na tela
  render() {
    return (
      <div>
        <h1>Relógio</h1>
        <DataFormatada date={this.state.date} />
        <div className="ContainerBotoes">
          <button className="BotaoPausar" onClick={() => this.Pausar()}>Pausar</button>
          <button className="BotaoRetomar" onClick={() => this.Retomar()}>Retomar</button>
        </div>
      </div>
    )
  }

}

// Componente funcional
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Clock />
        <Clock />
      </header>
    </div>
  );
}

export default App;