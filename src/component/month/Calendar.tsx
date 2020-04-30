import React from 'react';
import { useCallback } from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';

import MonthWeekDayParts from 'component/month/standalone/WeekDays';
import ScheduleRegister from 'component/dialog/helper/ScheduleRegister';
import ShowScheduleDialog from 'component/dialog/helper/ShowScheduleDialog';
import WeeklyCalendar from 'component/month/WeeklyCalendar';
import { getMonthCalendar, createDaysID } from 'modules/tools/FCalendar';
import { IDate, TDaySchedule, ISchedule, IScheduleWithoutId } from 'modules/interface/ICalendar';
import { ContainerProps } from 'containers/RightContainer';

const useStyles = makeStyles({
    calendarStyle: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    }
});

type Props = ContainerProps;

const MonthCalender: React.FC<Props> = (props) => {
    const { year, month, state, pushSchedule, deleteSchedule, updateSchedule } = props;
    const classes = useStyles();

    const [registersOpen, setRegistersOpen] = React.useState(false);
    const [scheduleViewOpen, setScheduleViewOpen] = React.useState(false);
    const [dateValue, setDateValue] = React.useState<IDate>({day: 0, month: 0, year: 0});
    const [chooseSchedule, setChooseSchedule] = React.useState<ISchedule>({id: -1, title: "", time: "00:00"});

    const monthCalendar = getMonthCalendar(year, month);

    const onClick = useCallback((dayValue: IDate) => {
        setDateValue(dayValue);
        setRegistersOpen(true);
    }, []);
    const onCloseRegister = useCallback(() => {
        setRegistersOpen(false);
    }, []);
    const onCloseViewer = useCallback(() => {
        setScheduleViewOpen(false);
    }, []);

    const openScheduleView = React.useCallback((s: ISchedule, d: IDate) => {
        setDateValue(d);
        setChooseSchedule(s);
        setScheduleViewOpen(true);
    }, [])

    return (
        <div className={classes.calendarStyle}>
            <MonthWeekDayParts />
            <WeeklyCalendar month={month} weeklyCalendar={monthCalendar} schedules={state} onClick={onClick} onClickSchedule={openScheduleView} />
            <ScheduleRegister open={registersOpen} onClose={onCloseRegister} dateValue={dateValue} pushSchedule={pushSchedule} />
            <ShowScheduleDialog open={scheduleViewOpen} onClose={onCloseViewer} date={dateValue} schedule={chooseSchedule} deleteSchedule={deleteSchedule} updateSchedule={updateSchedule}/>
        </div>
    );
}

export default MonthCalender;