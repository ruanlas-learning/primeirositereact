import React, {Component} from 'react';

class Equipe extends Component{
    render(){
        return(
            <div>
                <Sobre nome={this.props.nome} cargo={this.props.cargo}
                    idade={this.props.idade} />
                    <hr />
            </div>
        );
    }
}

class Sobre extends Component{
    render(){
        return(
            <div>
                <h2>Olá, sou o(a) {this.props.nome}</h2>
                <h3>Cargo: {this.props.cargo}</h3>
                <h3>Cargo: {this.props.idade}</h3>
            </div>
        );
    }
}

function App(){
    return(
        <div>
            <h1>Conheça nossa equipe:</h1>
            <Equipe nome="Lucas" cargo="Programador" idade="29" facebook="https://google.com" />
            <Equipe nome="Matheus" cargo="Designer" idade="19" facebook="https://google.com"/>
            <Equipe nome="Amanda" cargo="Front-end" idade="15" facebook="https://google.com"/>
        </div>
    );
}

export default App;