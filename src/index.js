import React from 'react'
import ReactDOM from 'react-dom'
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/vela-blue/theme.css';
import 'primeflex/primeflex.css';

import { Card } from 'primereact/card';
        


export default function App() {
 return (
    <Card title="JOGO DE CONTINHAS" className="md:w-25rem bg-cyan-700 shadow-8">
        <Card className='bg-cyan-50'>

        </Card>
    </Card>
 )
}
ReactDOM.render(
 <App />,
 document.querySelector("#root")
)