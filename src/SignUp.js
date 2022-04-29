import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './App.css';

import ButtonAppBar from './Componentes/BarraSignUp';
import CuadroSignUp from './Componentes/CuadroSignUp';

function SignUp(){
return(
    <div className='App'>
        <ButtonAppBar/>
        <CuadroSignUp/>
    </div>

);
}
export default SignUp;