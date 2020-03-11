import React from 'react';

import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/core/styles/makeStyles';

type dayType = "LAST" | "NOW" | "NEXT";

interface OwnProps {
    day: {day: number, type: dayType}
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
    const {day} = props;
    const classes = useStyles();
    const typoclass = day.type === "NOW" ? classes.normal : classes.disables;

    return(<Typography className={typoclass}>{day.day}</Typography>);
}
export default Day;