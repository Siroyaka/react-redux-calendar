import React from 'react';
import clsx from 'clsx';

import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton';
import makeStyles from '@material-ui/core/styles/makeStyles';

import { ICalendarDays } from 'modules/interface/ICalendar';

interface OwnProps {
    month: number,
    day: ICalendarDays
}

type Props = OwnProps;

const useStyles = makeStyles(() => ({
    parts: {
        height: '20px',
        width: '20px',
        margin: '4px',
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
    return(
        <IconButton className={clsx(classes.parts)} size='small'>
            <Typography variant='caption' className={typoclass}>{day.day}</Typography>
        </IconButton>
    );
}
export default Day;