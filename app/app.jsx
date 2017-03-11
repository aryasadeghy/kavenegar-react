import React from 'react'
import ReactDOM from 'react-dom'
var {Route, Router, IndexRoute, hashHistory} = require ('react-router');
import About from 'About'
import Simple from 'Simple'
import Main from 'Main';
import LookUp from 'LookUp';
import receiveSMS from 'receiveSMS'
ReactDOM.render(
  <Router history = {hashHistory}>
  <Route path = '/' component = {Main} >
    <Route path='about' components={About} />
    <Route path='Simple' components={Simple} />
    <Route path='receive' components={receiveSMS} />
    <IndexRoute  component={LookUp} />
  </Route>
</Router>
  ,
  document.getElementById('app')
);
