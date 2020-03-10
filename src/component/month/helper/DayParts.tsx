import React from 'react';

import TypoGraphy from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Card from '@material-ui/core/Card';

import { IDayFormat } from 'modules/interface/ICalendar';

const useStyles = makeStyles({
    cellStyle: {
        flexBasis: '100%',
    }
});

type Props = IDayFormat;

const MonthDayParts: React.FC<Props> = (props: Props) => {
    const {day, schedule} = props;
    const classes = useStyles();
    let schedulecount;
    if (schedule.length > 0) {
        schedulecount = <div>Schedule: {schedule.length}</div>
    } else {
        schedulecount = <div></div>
    }
    return(
        <Card className={classes.cellStyle}>
            <TypoGraphy align='center'>{day}</TypoGraphy>
            <div>{schedulecount}</div>
        </Card>
    );
}

export default MonthDayParts;