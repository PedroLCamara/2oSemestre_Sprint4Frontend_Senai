//Importa apenas o componente da biblioteca 'React'
import { Component } from 'react';
import './TiposEventos.css';

//Cria a classe TiposEventos que herda do 'Component' importado
class TiposEventos extends Component{
    constructor(props){
        super(props);
        this.state = {
            ListaTiposEventos: [],
            idTipoEvento: 0,
            tituloTipoEvento: '',

        };

    };

    BuscarTiposEventos = () => {
        console.log("HEY");
        fetch('http://localhost:5000/api/TiposEventos') //endereço da api que irá se comunicar
        .then( Resposta => Resposta.json()) //Deixa o formato do retorno da api como json
        .then(dados => this.setState({ ListaTiposEventos: dados})) //Atualiza os dados da lista com o retorno da api
        .catch(erro => console.log(erro))
    }

    AtualizaEstadoDoTitulo = async (event) => {
        await this.setState({tituloTipoEvento: event.target.value})
        console.log(event.target.value)
    }

    CadastrarTipoEvento = (event) => {
        event.preventDefault();

        fetch('http://localhost:5000/api/TiposEventos', { //endereço da api que irá se comunicar
            
            method: 'POST', //define o verbo da requisição
            body: JSON.stringify({ //muda o objeto para JSON
                tituloTipoEvento: this.state.tituloTipoEvento
            }),
            headers:{ "Content-Type" :"application/json"} //define que a comunicação será feita por JSON
        })
        .then(console.log("Cadastrado")) 
        .then(this.BuscarTiposEventos) 
        .catch(erro => console.log(erro))
        .then(this.setState({tituloTipoEvento: ''}));
    }

    componentDidMount(){
        this.BuscarTiposEventos()
    };

    //Renderizar
    render(){
        return(
            //JSX
            <div className="App">
                <main className="App-header">
                    {/* Lista de tipos de eventos */}
                    <section>
                        <h2>Lista de tipos de eventos</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Titulo</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.ListaTiposEventos.map( (TipoEvento) => {
                                        return( <tr key={TipoEvento.idTipoEvento}> 
                                                    <td>{TipoEvento.idTipoEvento}</td> 
                                                    <td>{TipoEvento.tituloTipoEvento}</td> 
                                                </tr>)})
                                }
                            </tbody>
                        </table>
                    </section>

                    {/* Cadastro de tipos de eventos */}
                    <section>
                        <h2>Cadastro de tipo de evento</h2>
                        <form onSubmit={this.CadastrarTipoEvento}>
                            <div>
                                <input type="text" value={this.state.tituloTipoEvento} placeholder="Titulo do tipo de evento" onChange={this.AtualizaEstadoDoTitulo}></input>
                                <button type="submit">Cadastrar</button>
                            </div>
                        </form>
                    </section>
                </main>
            </div>
        );
    };


};

//Exportar
export default TiposEventos;