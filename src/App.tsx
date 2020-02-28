import React from 'react';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';

import './App.css';
import Overview from './Overview';

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
