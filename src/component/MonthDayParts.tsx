import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TypoGraphy from '@material-ui/core/Typography';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import withStyles, { WithStyles, StyleRules } from '@material-ui/core/styles/withStyles';
import createStyles from '@material-ui/core/styles/createStyles';
import {DayData} from '../datainterface/dayinterface';


const styles = (theme:Theme) : StyleRules => createStyles({
    cellStyle: {
        borderStyle: 'solid',
        borderWidth: '1px'
    }
});

type Props = DayData & WithStyles<typeof styles>;

const MonthDayParts: React.FC<Props> = (props: Props) => {
    const {day, schedule, classes} = props;
    let schedulecount;
    if (schedule.length > 0) {
        schedulecount = <div>Schedule: {schedule.length}</div>
    } else {
        schedulecount = <div></div>
    }
    return(
        <TableCell className={classes.cellStyle}>
            <TypoGraphy align='center'>{day}</TypoGraphy>
            <TableBody>{schedulecount}</TableBody>
        </TableCell>
    );
}

export default withStyles(styles)(MonthDayParts);