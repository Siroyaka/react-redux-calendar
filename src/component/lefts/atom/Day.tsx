import React from 'react';
import clsx from 'clsx';

import { Link } from 'react-router-dom';

import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton';
import makeStyles from '@material-ui/core/styles/makeStyles';

import { IDate } from 'modules/interface/ICalendar';

interface OwnProps {
    mainMonth: number,
    date: IDate
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

const makeLink = (year:number, month: number, day: number) => '/' + year + '/' + month + '/' + day;

const Day: React.FC<Props> = (props) => {
    const {mainMonth, date} = props;
    const classes = useStyles();
    const typoclass = mainMonth === date.month ? classes.normal : classes.disables;
    return(
        <IconButton className={clsx(classes.parts)} size='small' component={Link} to={makeLink(date.year, date.month, date.day)} >
            <Typography variant='caption' className={typoclass}>{date.day}</Typography>
        </IconButton>
    );
}

export default Day;