import React from 'react';
import { useParams } from 'react-router-dom';

import './CalendarForm.css';
import MonthCalender from './MonthCalendar';
import {MonthData} from '../datainterface/monthinterface';
import { NextSelector, PrevSelector } from './PageSelector';
import { ContainerProps } from '../containers/index';

interface RouteParams {
    id: string | undefined
}

interface OwnProps {
}

const getData = (month: number, data: MonthData[]) => {
    let a = data.find(d => d.month === month);
    if (a === undefined) return data[0];
    return a;
}

type Props = ContainerProps;

const CalendarForm = (props: Props) => {
    const {id} = useParams<RouteParams>();
    const {schedules} = props;
    const urlMonth = parseInt(id);

    let monthData = getData(urlMonth, schedules);
    return (
        <div className='calendar-split'>
            <div className='left-calendar'>
                <button onClick={() => props.pageMove(2)}>test</button>
            </div>

            <div className='right-calendar'>
                <PrevSelector link={urlMonth - 1} />
                <NextSelector link={urlMonth + 1} />
                <MonthCalender {...monthData} />
            </div>
                
        </div>
    );
}

export default CalendarForm;
