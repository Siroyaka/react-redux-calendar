import React from 'react';

import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';

interface OwnProps {
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

const WeekDays: React.FC<Props> = () => {
    const classes = useStyles();
    const weekDays = ['日', '月', '火', '水', '木', '金', '土'];
    return(
        <Box display='flex' flexDirection='row' >
            {weekDays.map((weekDay) => (
                <Box className={classes.parts} textAlign='center'>
                    <Typography variant='caption'>{weekDay}</Typography>
                </Box>
            ))}
        </Box>
    );
}
export default WeekDays;