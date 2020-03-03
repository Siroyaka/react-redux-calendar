import React from 'react';

import TableCell from '@material-ui/core/TableCell';
import TypoGraphy from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

import { IDayFormat } from 'modules/interface/ICalendar';

const useStyles = makeStyles({
    cellStyle: {
        flexBasis: '100%',
        borderStyle: 'solid',
        borderWidth: '1px'
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
        <TableCell className={classes.cellStyle}>
            <TypoGraphy align='center'>{day}</TypoGraphy>
            <div>{schedulecount}</div>
        </TableCell>
    );
}

export default MonthDayParts;