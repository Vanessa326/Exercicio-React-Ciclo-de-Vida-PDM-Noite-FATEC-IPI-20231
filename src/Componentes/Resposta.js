import React, { Component } from 'react'
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/vela-blue/theme.css';
import 'primeflex/primeflex.css';


import { Button } from 'primereact/button';

        
        

export default class Resposta extends Component {
       
    render() {
        
        return (

            <div className="card flex flex-wrap justify-content-center gap-3 p-3 text-cyan-900 font-bold">
                {this.props.alternativas.map((valor) => <Button label={valor} severity="info" text raised />)}
            </div>
            
            
        )

    }
}