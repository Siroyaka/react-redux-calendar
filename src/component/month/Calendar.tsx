import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';

import MonthWeekDayParts from 'component/month/WeekDayParts';
import Days from 'component/month/Days';
import { IMonthFormat } from 'modules/interface/ICalendar';

const useStyles = makeStyles({
    calendarStyle: {
        display: 'flex',
        flexDirection: 'column',
        flexBasis: 'auto',
        width: '100%',
    }
});

type Props = IMonthFormat;

const MonthCalender: React.FC<Props> = (props) => {
    const { month } = props;
    const classes = useStyles();
    return (
        <div className={classes.calendarStyle}>
            <MonthWeekDayParts />
            <Days year={2020} month={month}/>
        </div>
    );
}

export default MonthCalender;