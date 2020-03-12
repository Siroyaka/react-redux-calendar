import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';

import Day from 'component/month/helper/Day';
import { ICalendarDays } from 'modules/interface/ICalendar';

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
    }
});

interface OwnProps {
    month: number,
    // schedules: {[key: string]: string[]},
    weeklyCalendar: ICalendarDays[][]
}

type Props = OwnProps;

const WeeklyCalendar: React.FC<Props> = (props) => {
    const classes = useStyles();
    const {month, weeklyCalendar} = props;

    return(
        <div className={classes.calendarStyle}>
            {weeklyCalendar.map((week) => (
                <div className={classes.rowStyle}>
                    {week.map((day) => (
                        <Day day={day} isDisables={day.month !== month}/>
                    ))}
                </div>
            ))}
        </div>
    );

}

export default WeeklyCalendar;