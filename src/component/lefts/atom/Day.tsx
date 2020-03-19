import React from 'react';


import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';

import { ICalendarDays } from 'modules/interface/ICalendar';

interface OwnProps {
    month: number,
    day: ICalendarDays
}

type Props = OwnProps;

const useStyles = makeStyles(() => ({
    part: {
        height: '20px',
        width: '20px',
        margin: '10px',
    },
    normal: {
        color: 'black',
    },
    disables: {
        color: 'gray',
    }
}));

const Day: React.FC<Props> = (props) => {
    const {month, day} = props;
    const classes = useStyles();
    const typoclass = month === day.month ? classes.normal : classes.disables;
    return(<Typography className={typoclass}>{day.day}</Typography>);
}
export default Day;