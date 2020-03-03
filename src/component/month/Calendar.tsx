import React from 'react';

import Table from '@material-ui/core/Table';
import {TableHead, TableBody} from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';

import MonthWeekDayParts from 'component/month/WeekDayParts';
import Days from 'component/month/Days';
import { IMonthFormat } from 'modules/interface/ICalendar';

const useStyles = makeStyles({
    tableStyle: {
        width: '100%',
        tableLayout: 'fixed'
    }
});

type Props = IMonthFormat;

const MonthCalender: React.FC<Props> = (props) => {
    const { month } = props;
    const classes = useStyles();
    return (
        <div>
            <Table className={classes.tableStyle}>
                <TableHead>
                    <MonthWeekDayParts />
                </TableHead>
                <TableBody>
                    <Days year={2020} month={month}/>
                </TableBody>
            </Table>
        </div>
    );
}

export default MonthCalender;