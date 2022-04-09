import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import PaginaPrincipal from './PaginaPrincipal';
import reportWebVitals from './reportWebVitals';
import { Router, Route,Switch, Redirect } from "react-router-dom";
import Login from './Login';
import { createBrowserHistory } from 'history';
import SignUp from './SignUp';

var hist = createBrowserHistory();
ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/Login" component={Login}/>
      <Route path="/SignUp" component={SignUp}/>
      <Route path="/" component={PaginaPrincipal}/>

    </Switch>
  </Router>,
  document.getElementById('root')
);


