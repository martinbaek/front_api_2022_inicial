import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './App.css';
import BarrraLogueado from './Componentes/BarraLogueado';
import { Box } from '@mui/material';
import CuadroPerfil from './Componentes/CuadroPerfil';

function Perfil(){
return(
    <div className='App'>
        <BarrraLogueado/>
        <CuadroPerfil/>
    </div>

);
}
export default Perfil;