import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles({
    rowStyle: {
        display: 'flex',
        flex: '1 1 0%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    cellStyle: {
        textAlign: 'center',
        flexBasis: '100%'
    }
});

interface OwnProps {

}

type Props = OwnProps;

const MonthWeekDayParts : React.FC<Props> = () => {
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

export default MonthWeekDayParts;