import React from 'react';
import {DayData} from '../datainterface/dayinterface';

type Props = DayData;

const MonthDayParts: React.FC<Props> = (props: Props) => {
    const {day, schedule} = props;
    let schedulecount;
    if (schedule.length > 0) {
        schedulecount = <div>Schedule: {schedule.length}</div>
    } else {
        schedulecount = <div></div>
    }
    return(
        <div className='Day'>
            <div>{day}</div>
            {schedulecount}
        </div>
    );
}

export default MonthDayParts;