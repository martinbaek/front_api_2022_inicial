import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './App.css';
import ButtonAppBar from './Componentes/BarraPrincipal';

function PaginaPrincipal(){
return(
    <div className='App'>
        <ButtonAppBar/>
        
        <h2>
            Hola, toca en el boton de Login para ingresar a la pagina web o create una cuenta tocando SignUp.
        </h2>
        <h2>
            Ingresa para acceder a las mejores recetas hechas con mucho amor.
            Nuestra pagina es colaborativa, es por eso que les pedimos que sean originales y pongan un toque suyo cuando suben sus recetas!
        </h2>
    </div>

);
}
export default PaginaPrincipal;