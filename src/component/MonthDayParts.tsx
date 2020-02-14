import React from 'react';
import {DayData} from '../datainterface/dayinterface';

type Props = DayData;

const MonthDayParts: React.FC<Props> = (props: Props) => {
    const {day} = props;
    return(
        <div className='Day'>{day}</div>
    );
}

export default MonthDayParts;