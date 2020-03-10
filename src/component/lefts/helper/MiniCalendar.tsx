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
    nowMonthcell: {
        width: '20px',
        height: '20px',
    },
    disableMonthcell: {
        width: '20px',
        height: '20px',
        color: 'gray',
    }
}));

const MiniCalendar : React.FC<Props> = (props) => {
    const {year, month} = props;
    const monthCalendar = getMonthCalendar(year, month);

    const theme = useTheme();
    const classes = useStyles(theme);

    return(
        <div className={classes.calendar}>
            {monthCalendar.map((week) => (
                <div className={classes.row}>
                    {
                        week.map((day) => (
                            <div className={classes.nowMonthcell}>{day.day}</div>
                        ))
                    }
                </div>
            ))}
        </div>
    )
}

export default MiniCalendar;