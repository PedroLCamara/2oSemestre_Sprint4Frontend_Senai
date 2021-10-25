import './App.css';
import { Component } from 'react';

class Repositorios extends Component{
  constructor(props){
    super(props);
    this.state = {
      Id: 0,
      Name: '',
      Descricao: '',
      DataDeCriacao: new Date(),
      Size: 0,
      ListaDeRepos: [],
      UserName: ''
    }
  }

  ListarRepos = (event) => {
    event.preventDefault();
    fetch("https://api.github.com/users/"+this.state.UserName+"/repos")
    .then(Resposta => Resposta.json())
    .then(Dados => {
      if (Dados.message == undefined)
      {
        this.setState({ListaDeRepos: Dados})
      }
    })
    .catch(Erro => console.log(Erro));
  }

  AtualizarTexto = async (event) => {
    await this.setState({UserName: event.target.value});
    console.log(this.state.UserName);
  }


  render(){
    return(
      <table>
        <section>
        <thead>
          <tr className="LinhaTabela">
            <th>Id</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Data de criação</th>
            <th>Tamanho</th>
          </tr>
        </thead>
        <tbody>
          {
              this.state.ListaDeRepos.sort((Rep1, Rep2) => {
                if (Rep1.created_at < Rep2.created_at) {
                  return -1
                }
                else if(Rep1.created_at > Rep2.created_at){
                  return 1
                }
                else return 0;
              }).reverse().map( (Repositorio) => {
                this.state.ListaDeRepos.length = 10;
                  return(
                    <tr key ={Repositorio.id} className="LinhaTabela">
                        <td>{Repositorio.id}</td>
                        <td>{Repositorio.name}</td>
                        <td>{Repositorio.description}</td>
                        <td>{Repositorio.created_at}</td>
                        <td>{Repositorio.size}</td>
                    </tr>
                  )
              })
          }
        </tbody>
        </section>
        <section>
          <form onSubmit={this.ListarRepos}>
            <input type="text" placeholder="Usuario a buscar" value={this.state.UserName} onChange={this.AtualizarTexto}></input>
            <button type="submit">Buscar</button>
          </form>
        </section>
      </table>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Repositorios></Repositorios>
      </header>
    </div>
  );
}

export default App;
