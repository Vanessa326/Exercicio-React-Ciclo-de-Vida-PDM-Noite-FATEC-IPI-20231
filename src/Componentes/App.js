import React from 'react'
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/vela-blue/theme.css';
import 'primeflex/primeflex.css';

import { Card } from 'primereact/card';
import Conta from '../Componentes/Conta';
import Resposta from '../Componentes/Resposta';

        


export default function App() {
 return (
    <Card title="JOGO DE CONTINHAS" className="md:w-25rem bg-cyan-700 shadow-8">
        <Card className='bg-cyan-50'>
            <Conta
            num={['0','1','2','3','4','5','6','7','9']}
            operator={['/', '*', '-', '+']}
            />

        <Resposta />

            
        </Card>
        
    </Card>
 )
}
