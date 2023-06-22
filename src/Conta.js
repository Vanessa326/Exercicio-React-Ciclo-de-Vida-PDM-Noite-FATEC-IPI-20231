import React, { Component } from 'react';
import 'primeflex/primeflex.css';
import { Card } from 'primereact/card';
import 'primereact/resources/themes/vela-blue/theme.css';

export default class Conta extends Component {
    state = {
        numero1: '0',
        numero2: '0',
        operacao: '+',
    }
    
    aleatorio = (vetor) => vetor[Math.floor(Math.random() * vetor.length)];

    escolheElementos = () => {
        this.setState({numero1: this.aleatorio(this.props.num)});

        this.setState({numero2: this.aleatorio(this.props.num)});

        this.setState({operacao: this.aleatorio(this.props.operator)})
    };

    render() {
        return (
            <Card className='bg-cyan-50'>
                <div className="grid text-primary font-bold text-6xl text-center" >
                    <div className="col-1"></div>
                    <div className="col-3 border-1 border-round-xl">{this.state.numero1}</div>
                    <div className="col-3 ">{this.state.operacao}</div>
                    <div className="col-3 border-1 border-round-xl">{this.state.numero2}</div>
                    
                </div>
            </Card>
            
        )
    }


}