import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './App.css';
import BarrraLogueado from './Componentes/BarraLogueado';
import { Box } from '@mui/material';

function Recetas(){
return(
    <div className='App'>
        <BarrraLogueado/>
    </div>

);
}
export default Recetas;