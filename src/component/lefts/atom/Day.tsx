import React from 'react';

import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/core/styles/makeStyles';

import { ICalendarDays } from 'modules/interface/ICalendar';

interface OwnProps {
    month: number,
    day: ICalendarDays
}

type Props = OwnProps;

const useStyles = makeStyles(() => ({
    normal: {
        color: 'black',
        height: '20px',
        width: '20px',
    },
    disables: {
        color: 'gray',
        height: '20px',
        width: '20px',
    }
}));

const Day: React.FC<Props> = (props) => {
    const {month, day} = props;
    const classes = useStyles();
    const typoclass = month === day.month ? classes.normal : classes.disables;
    return(<Typography className={typoclass}>{day.day}</Typography>);
}
export default Day;