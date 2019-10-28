import React from 'react';

// const Bemvindo = (props) => <h2>Bem vindo(a) {props.nome}</h2>;
const Bemvindo = (props) => {
    return(
        <div>
            <h2>Bem vindo(a) {props.nome}</h2>
            <h3>Tenho {props.idade} Anos</h3>
        </div>
    );
};

function App(){
    // return <h1>Social</h1>
    return(
        <div>
            Olá Mundo!
            <Bemvindo nome="Daniel" idade="23"/>
            <Bemvindo nome="JOAO" idade="18"/>
            <h1>Curso React</h1>
        </div>
    );
}

export default App;