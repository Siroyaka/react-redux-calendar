import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';

import Day from 'component/month/helper/Day';
import { IDate, TDaySchedule, ISchedule } from 'modules/interface/ICalendar';
import { createDaysID } from 'modules/tools/FCalendar';
import { getSchedules } from 'state/Schedules/selectors';

const useStyles = makeStyles({
    calendarStyle: {
        display: 'flex',
        flex: '1 1 0%',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    rowStyle: {
        display: 'flex',
        flex: '1 1 0%',
        flexDirection: 'row',
        width: '100%',
        minWidth: '0',
        minHeight: '0',
    }
});

interface OwnProps {
    month: number,
    schedules: TDaySchedule,
    weeklyCalendar: IDate[][],
    onClick: (date: IDate) => void,
    onClickSchedule: (date: IDate, schedule: ISchedule) => void,
}

type Props = OwnProps;

const WeeklyCalendar: React.FC<Props> = (props) => {
    const classes = useStyles();
    const {month, weeklyCalendar, onClick, schedules, onClickSchedule} = props;
    const getSchedule = React.useCallback((date: IDate) => {
        const daysID = createDaysID(date);
        return daysID in schedules ? schedules[daysID].schedules : null;
    }, [schedules]);

    return(
        <div className={classes.calendarStyle}>
            {weeklyCalendar.map((week) => (
                <div className={classes.rowStyle}>
                    {week.map((date) => (
                        <Day 
                            date={date}
                            isDisables={date.month !== month}
                            schedules={getSchedules(schedules, date)}
                            onClick={onClick}
                            onClickSchedule={onClickSchedule}
                        />
                    ))}
                </div>
            ))}
        </div>
    );

}

export default WeeklyCalendar;