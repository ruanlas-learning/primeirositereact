import React from 'react';

// const Bemvindo = (props) => <h2>Bem vindo(a) {props.nome}</h2>;
const Equipe = (props) => {
    return(
        <div>
            <Sobre nome={props.nome} cargo={props.cargo} 
                idade={props.idade}/>
                <Social fb={props.facebook} />
        </div>
    );
};

const Sobre = (props) => {
    return(
        <div>
            <h2>Olá sou o(a) {props.nome}</h2>
            <h3>Cargo(a): {props.cargo}</h3>
            <h3>Idade: {props.idade}</h3>
            <hr/>
        </div>
    );
};

const Social = (props) => {
    return (
        <div>
            <a href={props.fb}>Facebook </a>
            <a>LinkedIn </a>
            <a>Youtube </a>
        </div>
    );
};

function App(){
    // return <h1>Social</h1>
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