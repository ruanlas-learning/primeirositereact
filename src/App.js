import React, {Component} from 'react';

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            status: false
        };
        this.entrar = this.entrar.bind(this);
        this.sair = this.sair.bind(this);
    }

    entrar(){
        this.setState({ status: true });
    }

    sair(){
        this.setState({ status: false });
    }

    render(){
        return(
            <div>
                {this.state.status === true &&
                    <h1>Bem-vindo ao sistema!</h1>
                }
                {this.state.status ?
                    <div>
                        <h1>Bem-vindo ao sistema novamente!</h1>
                        <button onClick={this.sair} >Sair do sistema</button>
                    </div> :
                    <div>
                        <h1>Olá visitante, faça o login!</h1>
                        <button onClick={this.entrar} >Entrar no sistema</button>
                    </div>
                }
                <div>
                    <h2>Curso React JS</h2>
                </div>
            </div>
        );
    }
}

export default App;