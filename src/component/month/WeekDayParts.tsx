import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
    rowStyle: {
        display: 'flex',
        flexBasis: '0',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    cellStyle: {
        textAlign: 'center',
        width: '100%'
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
                <div className={classes.cellStyle}>{wd}</div>
            ))}
        </div>
    );
}

export default MonthWeekDayParts;