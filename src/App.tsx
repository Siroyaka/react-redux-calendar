import React from 'react';
import './App.css';
import CalendarForm from './component/CalendarForm';
import Container from './containers/index';
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
