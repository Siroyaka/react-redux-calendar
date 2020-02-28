import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
    cellStyle: {
        borderStyle: 'solid',
        borderWidth: '1px'
    }
});

interface OwnProps {

}

type Props = OwnProps;

const MonthWeekDayParts : React.FC<Props> = () => {
    const classes = useStyles();
    const weekDays = ['日', '月', '火', '水', '木', '金', '土'];
    return(
        <TableRow>
            {weekDays.map((wd: string) => (
                <TableCell className={classes.cellStyle} align='center'>{wd}</TableCell>
            ))}
        </TableRow>
    );
}

export default MonthWeekDayParts;