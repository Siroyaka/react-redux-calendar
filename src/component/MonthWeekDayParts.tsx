import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const MonthWeekDayParts : React.FC = () => {
    const weekDays = ['日', '月', '火', '水', '木', '金', '土'];
    return(
        <TableRow>
            {weekDays.map((wd: string) => (
                <TableCell>{wd}</TableCell>
            ))}
        </TableRow>
    );
}
export default MonthWeekDayParts;