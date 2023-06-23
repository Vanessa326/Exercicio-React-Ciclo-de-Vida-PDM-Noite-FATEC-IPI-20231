import React, { Component } from 'react'
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/vela-blue/theme.css';
import 'primeflex/primeflex.css';

import { Card } from 'primereact/card';
import { Button} from 'primereact/button';
import Conta from '../Componentes/Conta';
import Resposta from '../Componentes/Resposta';

        


export class App extends Component {
    
    state = {
        numero1: '0',
        numero2: '0',
        operacao: '+',
        resposta: 0,
        alternativas: Array(4).fill('')

    }

    num=['0','1','2','3','4','5','6','7','9']
    operator=['/', '*', '-', '+']

    aleatorio = (vetor) => vetor[Math.floor(Math.random() * vetor.length)];

    escolheElementos = () => {
        this.setState({numero1: this.aleatorio(this.num)});

        this.setState({numero2: this.aleatorio(this.num)});

        this.setState({operacao: this.aleatorio(this.operator)})

        this.setState({resposta: eval(this.state.numero1 + this.state.operacao + this.state.numero2)});

        this.criarAlternativas()
    };

    criarAlternativas = () => {
        const aux = Array.from({length: 3}, () => Math.floor(Math.random() * 60));

        this.setState({alternativas: [this.state.resposta, ...aux]})

    }

    timer = null
    iniciar = () => { 
        this.timer = setInterval(this.escolheElementos, 3000);
        console.log(this.timer)
      }

    parar = () => {
        clearInterval(this.timer)
        this.setState({numero1: '0'});

        this.setState({numero2: '0'});

        this.setState({operacao: '+'})
    }
      

render(){
 return (
    <Card title="JOGO DE CONTINHAS" className="md:w-25rem bg-cyan-700 shadow-8">
        <Card className='bg-cyan-50'>
            <Conta
                numero1={this.state.numero1}
                numero2={this.state.numero2}
                operacao={this.state.operacao}
            />

        <p className="m-2 text-cyan-900 font-bold">
            Escolha a resposta correta:
        </p>
        
        <Resposta 
            qtdResp={4}
            resposta={this.state.resposta} 
            alternativas={this.state.alternativas}
        />

        <div className="card flex flex-wrap justify-content-center gap-3">
            <Button 
            label="Iniciar Jogo" 
            icon="pi pi-check" severity="info" 
            onClick={this.iniciar}/>
            <Button label="Encerrar Jogo" icon="pi pi-times" severity="danger" 
            onClick={this.parar}/>
        </div>
            
        </Card>
        
    </Card>
 )}
}

export default App