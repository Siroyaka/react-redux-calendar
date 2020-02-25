import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TypoGraphy from '@material-ui/core/Typography';
import {DayData} from '../datainterface/dayinterface';

type Props = DayData;

const MonthDayParts: React.FC<Props> = (props: Props) => {
    const {day, schedule} = props;
    let schedulecount;
    if (schedule.length > 0) {
        schedulecount = <div>Schedule: {schedule.length}</div>
    } else {
        schedulecount = <div></div>
    }
    return(
        <TableCell>
            <TypoGraphy align='center'>{day}</TypoGraphy>
            <TableBody>{schedulecount}</TableBody>
        </TableCell>
    );
}

export default MonthDayParts;