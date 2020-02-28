import React from 'react';
import './App.css';
import Overview from './Overview';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact path="/" to="/2" />
        <Route path='/:id'>
          <Overview />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
