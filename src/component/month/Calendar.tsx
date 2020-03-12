import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';

import MonthWeekDayParts from 'component/month/standalone/WeekDays';
// import Days from 'component/month/Days';
import WeeklyCalendar from 'component/month/WeeklyCalendar';
import { getMonthCalendar } from 'modules/tools/FCalendar';

const useStyles = makeStyles({
    calendarStyle: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    }
});

type Props = {year: number, month: number};

const MonthCalender: React.FC<Props> = (props) => {
    const { year, month } = props;
    const classes = useStyles();
    const monthCalendar = getMonthCalendar(year, month);
    return (
        <div className={classes.calendarStyle}>
            <MonthWeekDayParts />
            <WeeklyCalendar month={month} weeklyCalendar={monthCalendar} />
        </div>
    );
}

export default MonthCalender;