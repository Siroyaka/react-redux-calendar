import React from 'react';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';

import './App.css';
import Overview from './Overview';
import Header from 'component/header/Header';
import { getToday } from 'modules/tools/FCalendar';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact path="/" to={getToday()} />
        <Route path='/:year/:month/:day'>
          <Overview />
        </Route>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
