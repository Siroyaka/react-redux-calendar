import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    card: {
        flexBasis: '100%',
        textAlign: 'center',
    }
});

const WeekDays : React.FC = () => {
    const classes = useStyles();
    const weekDays = ['日', '月', '火', '水', '木', '金', '土'];
    return(
        <Box display='flex' flexBasis='0' flexDirection='row' justifyContent='space-between'>
            {weekDays.map((wd: string) => (
                <Paper variant='outlined' square className={classes.card}>
                    {wd}
                </Paper>
            ))}
        </Box>
    );
}

export default WeekDays;