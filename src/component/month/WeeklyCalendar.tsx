import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';

import DayParts from 'component/month/helper/DayParts copy';
import { ICalendarDays } from 'modules/interface/ICalendar';

const useStyles = makeStyles({
    calendarStyle: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    rowStyle: {
        display: 'flex',
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
                        <DayParts day={day} isDisables={day.month !== month}/>
                    ))}
                </div>
            ))}
        </div>
    );

}

export default WeeklyCalendar;