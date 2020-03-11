import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles({
    rowStyle: {
        display: 'flex',
        flexBasis: '0',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    cellStyle: {
        textAlign: 'center',
        flexBasis: '100%'
    }
});

const WeekDays : React.FC = () => {
    const classes = useStyles();
    const weekDays = ['日', '月', '火', '水', '木', '金', '土'];
    return(
        <div className={classes.rowStyle}>
            {weekDays.map((wd: string) => (
                <Card className={classes.cellStyle}>{wd}</Card>
            ))}
        </div>
    );
}

export default WeekDays;