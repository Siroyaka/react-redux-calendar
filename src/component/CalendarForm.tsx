import React from 'react';
import {RouteComponentProps} from 'react-router-dom';

import './CalendarForm.css';
import MonthCalender from './MonthCalendar';
import data from '../data/monthData.json';
import {NextSelector, PrevSelector} from './PageSelector';

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
            <div className='calendar-split'>
                <div className='left-calendar'>
                    test
                </div>

                <div className='right-calendar'>
                    <PrevSelector link={urlMonth - 1} />
                    <NextSelector link={urlMonth + 1} />
                    <MonthCalender {...monthData} />
                </div>
                    
            </div>

        </React.Fragment>
    );
}

export default CalendarForm;
