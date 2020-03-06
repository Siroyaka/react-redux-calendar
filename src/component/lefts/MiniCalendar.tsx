import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';
import useTheme from '@material-ui/core/styles/useTheme';

import { getMonthCalendar } from 'modules/tools/FCalendar';

interface OwnProps {
    year: number,
    month: number
}

type Props = OwnProps;

const useStyles = makeStyles((theme) => ({
    calendar: {
        height: '120px',
        width: '160px',
    },
    row: {
        height: '20px',
        display: 'flex',
        flexDirection: 'row',
    },
    cell: {
        width: '20px',
        height: '20px',
    },
}));

const MiniCalendar : React.FC<Props> = (props) => {
    const {year, month} = props;
    const nMonth = getMonthCalendar(year, month);

    const theme = useTheme();
    const classes = useStyles(theme);

    return(
        <div className={classes.calendar}>
            {nMonth.map((week) => (
                <div className={classes.row}>
                {
                    week.map((day) => (
                        <div className={classes.cell}>{day === 0 ? null : day}</div>
                    ))
                }
                </div>
            ))}
        </div>
    )
}

export default MiniCalendar;