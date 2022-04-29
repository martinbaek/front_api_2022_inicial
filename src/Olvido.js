import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './App.css';
import ButtonAppBar from './Componentes/BarraPrincipal';
import CuadroOlvido from './Componentes/CuadroOlvido';



function Olvido(){
return(
    <div className='App'>
        <ButtonAppBar/>
        <CuadroOlvido/>
    </div>

);
}
export default Olvido;