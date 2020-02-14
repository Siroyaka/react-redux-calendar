import React from 'react';
import './App.css';
import MonthCalender from './component/MonthCalendar';
import data from './data/monthData.json';

const App = () => {
  let a = data.data[0];
  return (
    <div>
      <MonthCalender {...a} />
    </div>
  );
}

export default App;
