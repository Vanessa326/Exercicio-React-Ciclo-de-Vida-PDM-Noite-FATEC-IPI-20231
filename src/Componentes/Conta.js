import React, { Component } from 'react';
import 'primeflex/primeflex.css';
import 'primereact/resources/themes/vela-blue/theme.css';


export default class Conta extends Component {
    
    render() {
        return (
            
                <div className="grid text-cyan-900 font-bold text-6xl text-center border-round" >
                    <div className="col-1"></div>
                    <div className="col-3 border-1 border-round-xl">{this.props.numero1}</div>
                    <div className="col-3 ">{this.props.operacao}</div>
                    <div className="col-3 border-1 border-round-xl">{this.props.numero2}</div>   
                </div>
            
            
        )}
    }


