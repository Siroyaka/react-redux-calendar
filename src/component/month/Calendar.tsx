import React from 'react';
import { useCallback } from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';

import MonthWeekDayParts from 'component/month/standalone/WeekDays';
import ScheduleRegister from 'component/register/helper/ScheduleRegister';
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
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(0);
    const monthCalendar = getMonthCalendar(year, month);
    const onClick = useCallback((n: number) => {
        setValue(n);
        setOpen(true);
    }, []);
    const onClose = useCallback((n: number) => {
        setOpen(false);
    }, [])
    return (
        <div className={classes.calendarStyle}>
            <MonthWeekDayParts />
            <WeeklyCalendar month={month} weeklyCalendar={monthCalendar} onClick={onClick} />
            <ScheduleRegister open={open} value={value} onClose={onClose} />
        </div>
    );
}

export default MonthCalender;