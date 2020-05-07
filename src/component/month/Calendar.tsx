import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';

import MonthWeekDayParts from 'component/month/standalone/WeekDays';
import ScheduleRegister from 'component/dialog/helper/ScheduleRegister';
import ShowScheduleDialog from 'component/dialog/helper/ShowScheduleDialog';
import WeeklyCalendar from 'component/month/WeeklyCalendar';
import { getMonthCalendar } from 'modules/tools/FCalendar';
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
    const {
        year,
        month,
        stateSchedules,
        pushSchedule,
        deleteSchedule,
        updateSchedule,
        scheduleRegisterState,
        scheduleViewerState,
        openScheduleRegister,
        closeScheduleRegister,
        openScheduleViewer,
        closeScheduleViewer,
    } = props;
    const classes = useStyles();
    const monthCalendar = getMonthCalendar(year, month);

    return (
        <div className={classes.calendarStyle}>
            <MonthWeekDayParts />
            <WeeklyCalendar month={month} weeklyCalendar={monthCalendar} schedules={stateSchedules} onClick={openScheduleRegister} onClickSchedule={openScheduleViewer} />
            <ScheduleRegister state={scheduleRegisterState} onClose={closeScheduleRegister} pushSchedule={pushSchedule} />
            <ShowScheduleDialog state={scheduleViewerState} onClose={closeScheduleViewer} deleteSchedule={deleteSchedule} updateSchedule={updateSchedule}/>
        </div>
    );
}

export default MonthCalender;