import React from 'react';
import { useCallback } from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';

import MonthWeekDayParts from 'component/month/standalone/WeekDays';
import ScheduleRegister from 'component/register/helper/ScheduleRegister';
import WeeklyCalendar from 'component/month/WeeklyCalendar';
import { getMonthCalendar, createDaysID } from 'modules/tools/FCalendar';
import { ICalendarDays, IDaySchedule, IDayFormat, TDaySchedule, ISchedule } from 'modules/interface/ICalendar';

const useStyles = makeStyles({
    calendarStyle: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    }
});

interface OwnProps {
    year: number,
    month: number,
    pushSchedule: (s: TDaySchedule) => void,
    allSchedules: TDaySchedule
}

type Props = OwnProps;

const dateSlice = (num: number, len: number) => {
    return ('0000' + num).slice(len * -1);
}

const MonthCalender: React.FC<Props> = (props) => {
    const { year, month, allSchedules, pushSchedule } = props;
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [dateValue, setDateValue] = React.useState<ICalendarDays>({day: 0, month: 0, year: 0});
    const monthCalendar = getMonthCalendar(year, month);
    const onClick = useCallback((dayValue: ICalendarDays) => {
        setDateValue(dayValue);
        setOpen(true);
    }, []);
    const onClose = useCallback(() => {
        setOpen(false);
    }, []);
    const setSchedule = useCallback((s: ISchedule) => {
        let all = {...allSchedules};
        const daysID = createDaysID(s.year, s.month, s.day);
        if (daysID in all) {
            all[daysID].schedules.push(s);
        } else {
            all[daysID] = {daysId: daysID, year: s.year, month: s.month, day: s.day, schedules: [s]};
        }
        pushSchedule(all);
        setOpen(false);
    }, [pushSchedule, allSchedules]);

    return (
        <div className={classes.calendarStyle}>
            <MonthWeekDayParts />
            <WeeklyCalendar month={month} weeklyCalendar={monthCalendar} schedules={allSchedules} onClick={onClick} />
            <ScheduleRegister open={open} onClose={onClose} dateValue={dateValue} pushSchedule={setSchedule} />
        </div>
    );
}

export default MonthCalender;