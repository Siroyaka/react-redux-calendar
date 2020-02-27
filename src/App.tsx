import React from 'react';
import './App.css';
import Container from './containers/hooksindex';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact path="/" to="/2" />
        <Route path='/:id'>
          <Container />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
