import React, { Component } from 'react'
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/vela-blue/theme.css';
import 'primeflex/primeflex.css';


import { Button } from 'primereact/button';

        
        

export default class Resposta extends Component {
    state = {
        alternativas: ['1','2', '3'],
        selecionado : '0'
    }
    
    criarAlternativas = () => {
        const aux = Array.from({length: this.props.qtdResp}, () => Math.floor(Math.random() * 60));

        this.setState({alternativas: [this.props.resposta, ...aux]})
    }

    render() {
        return (

            <div className="card flex flex-wrap justify-content-center gap-3 p-3 text-cyan-900 font-bold">
                {this.state.alternativas.map((valor) => <Button label={valor} severity="info" text raised />)}
            </div>
            
            
        )

    }
}