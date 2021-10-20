//Importa apenas o componente da biblioteca 'React'
import { Component } from 'react';
import './TiposEventos.css';

//Cria a classe TiposEventos que herda do 'Component' importado
class TiposEventos extends Component{
    constructor(props){
        super(props);
        this.state = {
            ListaTiposEventos: [{IdTipoEvento: 1, Titulo: 'a'}, {IdTipoEvento: 2, Titulo: 'b'}],
            Titulo: '',

        };

    };
    //O componente já foi inserido no DOM?
    componentDidMount(){
    
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
                                        return( <tr key={TipoEvento.IdTipoEvento}> 
                                                    <td>{TipoEvento.IdTipoEvento}</td> 
                                                    <td>{TipoEvento.Titulo}</td> 
                                                </tr>)})
                                }
                            </tbody>
                        </table>
                    </section>

                    {/* Cadastro de tipos de eventos */}
                    <section>

                    </section>
                </main>
            </div>
        );
    };


};

//Exportar
export default TiposEventos;