import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import withStyles, { WithStyles, StyleRules } from '@material-ui/core/styles/withStyles';
import createStyles from '@material-ui/core/styles/createStyles';

const styles = (theme:Theme) : StyleRules => createStyles({
    cellStyle: {
        borderStyle: 'solid',
        borderWidth: '1px'
    }
});

type Props = WithStyles<typeof styles>;

const MonthWeekDayParts : React.FC<Props> = ({classes}) => {
    const weekDays = ['日', '月', '火', '水', '木', '金', '土'];
    return(
        <TableRow>
            {weekDays.map((wd: string) => (
                <TableCell className={classes.cellStyle} align='center'>{wd}</TableCell>
            ))}
        </TableRow>
    );
}
export default withStyles(styles)(MonthWeekDayParts);