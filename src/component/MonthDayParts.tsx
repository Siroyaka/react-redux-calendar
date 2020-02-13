import React from 'react';

interface OwnProps {
    day: number
}

type Props = OwnProps;

const MonthDayParts: React.FC<Props> = (props) => {
    const {day} = props;
    return(
        <div className='Day'>{day > 0 ? day : ""}</div>
    );
}

export default MonthDayParts;