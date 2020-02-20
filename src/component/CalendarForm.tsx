import React from 'react';
import MonthCalender from './MonthCalendar';
import data from '../data/monthData.json';
import {RouteComponentProps} from 'react-router-dom';

interface OwnProps {
    id: number
}

const getData = (month: number) => {
  let a = data.data.find(d => d.month = month);
  if (a === undefined) return data.data[0];
  return a;
}

type props = OwnProps & RouteComponentProps<{id: string}>;

const CalendarForm = (props: props) => {
    const {id} = props.match.params;

    let monthData = getData(parseInt(id));
    return (
        <MonthCalender {...monthData} />
    );
}

export default CalendarForm;
