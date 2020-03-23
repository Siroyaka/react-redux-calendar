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
    const [dateValue, setDateValue] = React.useState("");
    const monthCalendar = getMonthCalendar(year, month);
    const onClick = useCallback(( dateValue: string) => {
        const addyear = year + "年" + dateValue;
        setDateValue(addyear);
        setOpen(true);
    }, [year]);
    const onClose = useCallback((n: number) => {
        setOpen(false);
    }, [])
    return (
        <div className={classes.calendarStyle}>
            <MonthWeekDayParts />
            <WeeklyCalendar month={month} weeklyCalendar={monthCalendar} onClick={onClick} />
            <ScheduleRegister open={open} onClose={onClose} dateValue={dateValue} />
        </div>
    );
}

export default MonthCalender;