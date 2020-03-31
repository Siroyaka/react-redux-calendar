import React from 'react';
import { useCallback } from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';

import MonthWeekDayParts from 'component/month/standalone/WeekDays';
import ScheduleRegister from 'component/dialog/helper/ScheduleRegister';
import ShowScheduleDialog from 'component/dialog/helper/ShowScheduleDialog';
import WeeklyCalendar from 'component/month/WeeklyCalendar';
import { getMonthCalendar, createDaysID } from 'modules/tools/FCalendar';
import { ICalendarDays, TDaySchedule, ISchedule } from 'modules/interface/ICalendar';

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

const MonthCalender: React.FC<Props> = (props) => {
    const { year, month, allSchedules, pushSchedule } = props;
    const classes = useStyles();

    const [registersOpen, setRegistersOpen] = React.useState(false);
    const [scheduleViewOpen, setScheduleViewOpen] = React.useState(false);
    const [dateValue, setDateValue] = React.useState<ICalendarDays>({day: 0, month: 0, year: 0});
    const [scheduleIndex, setScheduleIndex] = React.useState(0);
    const [chooseSchedule, setChooseSchedule] = React.useState<ISchedule>({title: "", year: 0, month: 0, day: 0, time: "00:00"});

    const monthCalendar = getMonthCalendar(year, month);

    const onClick = useCallback((dayValue: ICalendarDays) => {
        setDateValue(dayValue);
        setRegistersOpen(true);
    }, []);
    const onCloseRegister = useCallback(() => {
        setRegistersOpen(false);
    }, []);
    const onCloseViewer = useCallback(() => {
        setScheduleViewOpen(false);
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
        setRegistersOpen(false);
    }, [pushSchedule, allSchedules]);

    const deleteSchedule = useCallback((s: ISchedule, index: number) => {
        let all = {...allSchedules};
        const daysID = createDaysID(s.year, s.month, s.day);
        const newSchedule = daysID in all ? all[daysID].schedules.filter((_, i) => i!==index) : null;
        if (newSchedule === null) {
            return;
        }
        all[daysID].schedules = newSchedule;
        pushSchedule(all);
    }, [pushSchedule, allSchedules]);

    const updateSchedule = useCallback((s: ISchedule, index: number) => {
        let all = {...allSchedules};
        const daysID = createDaysID(s.year, s.month, s.day);
        all[daysID].schedules[index] = s;
        pushSchedule(all);
    }, [pushSchedule, allSchedules]);

    const openScheduleView = React.useCallback((s: ISchedule, i: number) => {
        setScheduleIndex(i);
        setChooseSchedule(s);
        setScheduleViewOpen(true);
    }, [])

    return (
        <div className={classes.calendarStyle}>
            <MonthWeekDayParts />
            <WeeklyCalendar month={month} weeklyCalendar={monthCalendar} schedules={allSchedules} onClick={onClick} onClickSchedule={openScheduleView} />
            <ScheduleRegister open={registersOpen} onClose={onCloseRegister} dateValue={dateValue} pushSchedule={setSchedule} />
            <ShowScheduleDialog open={scheduleViewOpen} onClose={onCloseViewer} index={scheduleIndex} schedule={chooseSchedule} deleteSchedule={deleteSchedule} updateSchedule={updateSchedule}/>
        </div>
    );
}

export default MonthCalender;