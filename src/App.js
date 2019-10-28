import React, {Component} from 'react';

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            nome: 'Matheus',
            contador: 0
        };

        this.aumentar = this.aumentar.bind(this);
        this.diminuir = this.diminuir.bind(this);
        this.mudarNome = this.mudarNome.bind(this);
    }

    aumentar(){
        console.log('Aumentou');
        let state = this.state;
        state.contador += 1;
        state.nome = 'Jose';
        this.setState(state);
    }

    diminuir(){
        console.log('Diminuiu');
        let state = this.state;
        if(state.contador === 0){
            alert('Opa, chegou a zero!');
            return;
        }
        state.contador -= 1;
        this.setState(state);
    }

    mudarNome(){
        let state = this.state;
        state.nome = prompt('Qual o novo nome?');
        this.setState(state);
    }

    render(){
        return(
            <div>
                <h1>Contador</h1>
                {this.state.nome}  <button onClick={this.mudarNome}>Mudar o nome</button>
                <h3>
                    <button onClick={this.diminuir}>-</button>
                    {this.state.contador}
                    <button onClick={this.aumentar}>+</button>
                </h3>
            </div>
        );
    }
}

export default App;