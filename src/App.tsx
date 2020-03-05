import React from 'react';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';

import './App.css';
import Overview from './Overview';
import Header from 'component/header/Header';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Redirect exact path="/" to="/2" />
          <Route path='/:id'>
            <Header />
            <Overview />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
