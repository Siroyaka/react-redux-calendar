import React from 'react';
import logo from './logo.svg';
import './App.css';
import MonthCalender from './component/MonthCalendar';

const App = () => {
  return (
    <div>
      <MonthCalender month={1} maxday={31} weekStart={3}/>
    </div>
  );
}

export default App;
