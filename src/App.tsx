import React from 'react';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';

import './App.css';
import Overview from './Overview';
import Header from 'component/header/Header';
import { getToday } from 'modules/tools/FCalendar';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Redirect exact path="/" to={getToday()} />
          <Route path='/:year/:month/:day'>
            <Header />
            <Overview />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
