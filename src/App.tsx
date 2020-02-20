import React from 'react';
import './App.css';
import CalendarForm from './component/CalendarForm';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:id" component={CalendarForm}/>
        <Redirect exact path="/" to="/2" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
