import React from 'react';
import MonthDayParts from './MonthDayParts';
import MonthWeekDayParts from './MonthWeekDayParts';
import {MonthData} from '../datainterface/monthinterface';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

type Props = MonthData;

const MonthCalender: React.FC<Props> = (props) => {
    const { month, monthDays } = props;
    return (
        <div>
            <Typography variant='h4' align='left'>{month}月</Typography>
            <Table>
                <TableHead>
                    <MonthWeekDayParts />
                </TableHead>
                <TableBody>
                    {monthDays.map((week) => (
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