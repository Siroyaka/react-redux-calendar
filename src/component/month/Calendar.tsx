import React from 'react';
import { useCallback } from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';

import MonthWeekDayParts from 'component/month/standalone/WeekDays';
import ScheduleRegister from 'component/register/helper/ScheduleRegister';
import WeeklyCalendar from 'component/month/WeeklyCalendar';
import { getMonthCalendar } from 'modules/tools/FCalendar';
import { ICalendarDays } from 'modules/interface/ICalendar';

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
    const onClick = useCallback((dayValue: ICalendarDays) => {
        const {year, month, day} = dayValue;
        const daydata = year + "年" + month + '月' + day + '日';
        setDateValue(daydata);
        setOpen(true);
    }, []);
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