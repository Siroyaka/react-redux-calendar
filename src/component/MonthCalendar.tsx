import React from 'react';
import './MonthCalendar.css';
import MonthDayParts from './MonthDayParts';
import MonthWeekDayParts from './MonthWeekDayParts';
import {MonthData} from '../datainterface/monthinterface';

type Props = MonthData;

const MonthCalender: React.FC<Props> = (props) => {
    const { month, monthDays } = props;
    return (
        <div>
            <h1>{month}月</h1>
            <div className='week weekdays'>
                <MonthWeekDayParts />
            </div>
            {monthDays.map((week) => (
                <div className='week'>
                    {week.map((dayData) => (
                        <MonthDayParts {...dayData}/>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default MonthCalender;