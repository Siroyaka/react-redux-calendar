import React from 'react';
import './MonthCalendar.css';
import MonthDayParts from './MonthDayParts';
import MonthWeekDayParts from './MonthWeekDayParts';

interface OwnProps {
    month: number
    maxday: 31 | 30 | 29 | 28
    weekStart: number
}

type Props = OwnProps;

const MakeWeek = (start: number, mx: number) => {
    let weeks : Array<Array<number>> = new Array(5);
    // 1週目の配列を作成
    let week1 : Array<number> = new Array(7).fill(0);
    for (let i = start; i < 7; i++) {
        week1[i] = i - start + 1;
    }
    weeks[0] = week1;

    // 2週目以降の配列を作成
    for (let i = 1; i < 5; i++) {
        const p = i * 7 - start + 1;
        let week = new Array(7);
        for (let k = 0; k < 7; k++) {
            let value = k + p > mx ? 0 : k + p; 
            week[k] = value;
        }
        weeks[i] = week;
    }
    return weeks;
}

const MonthCalender: React.FC<Props> = (props) => {
    const { month, weekStart, maxday } = props;
    const days = MakeWeek(weekStart, maxday);
    return (
        <div>
            <h1>{month}月</h1>
            <div className='week weekdays'>
                <MonthWeekDayParts />
            </div>
            {days.map((week: Array<number>) => (
                <div className='week'>
                    {week.map((day) => (
                        <MonthDayParts day={day} />
                    ))}
                </div>
            ))}
        </div>
    );
}

export default MonthCalender;