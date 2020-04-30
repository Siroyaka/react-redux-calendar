import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';

import Day from 'component/month/helper/Day';
import { IDate, TDaySchedule, ISchedule } from 'modules/interface/ICalendar';
import { createDaysID } from 'modules/tools/FCalendar';

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
    onClick: (day: IDate) => void,
    onClickSchedule: (s: ISchedule, d: IDate) => void,
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
                    {week.map((dates) => (
                        <Day dates={dates} isDisables={dates.month !== month} getSchedule={getSchedule} onClickCalendar={onClick} onClickSchedule={onClickSchedule}/>
                    ))}
                </div>
            ))}
        </div>
    );

}

export default WeeklyCalendar;