import React from 'react';

import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

import MonthDayParts from 'component/month/DayParts';
import MonthWeekDayParts from 'component/month/WeekDayParts';
import { IMonthFormat } from 'modules/interface/ICalendar';

const useStyles = makeStyles({
    tableStyle: {
        width: '100%',
        tableLayout: 'fixed'
    }
});

type Props = IMonthFormat;

const MonthCalender: React.FC<Props> = (props) => {
    const { month, day } = props;
    const classes = useStyles();
    return (
        <div>
            <Typography variant='h4' align='left'>{month}月</Typography>
            <Table className={classes.tableStyle}>
                <TableHead>
                    <MonthWeekDayParts />
                </TableHead>
                <TableBody>
                    {day.map((week) => (
                        <TableRow>
                            {week.map((dayData) => (
                                <MonthDayParts {...dayData}/>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>

    );
}

export default MonthCalender;