import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './App.css';
import ButtonAppBar from './Componentes/BarraLogin';

function Login(){
return(
    <div className='App'>
        <ButtonAppBar/>
        
        <h2>
           Login
        </h2>
    </div>

);
}
export default Login;