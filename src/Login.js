import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './App.css';
import ButtonAppBar from './Componentes/BarraLogin';
import CuadroLogin from './Componentes/CuadroLogin';

function Login(){
return(
    <div className='App'>
        <ButtonAppBar/>
        
        <CuadroLogin/>
    </div>

);
}
export default Login;