import React from 'react';
import MonthCalender from './MonthCalendar';
import data from '../data/monthData.json';
import PageSelector from './PageSelector';
import {RouteComponentProps} from 'react-router-dom';

interface OwnProps {
    id: number
}

const getData = (month: number) => {
    console.log(month);
    let a = data.data.find(d => d.month === month);
    if (a === undefined) return data.data[0];
    return a;
}

type props = OwnProps & RouteComponentProps<{id: string}>;

const CalendarForm = (props: props) => {
    const {id} = props.match.params;
    const urlMonth = parseInt(id);

    let monthData = getData(urlMonth);
    return (
        <React.Fragment>
            <PageSelector link={urlMonth + 1} text='Next'/>
            <PageSelector link={urlMonth - 1} text='Prev'/>
            <MonthCalender {...monthData} />
        </React.Fragment>
    );
}

export default CalendarForm;
