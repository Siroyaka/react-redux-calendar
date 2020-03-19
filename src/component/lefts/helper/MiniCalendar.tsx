import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';
import useTheme from '@material-ui/core/styles/useTheme';
import Box from '@material-ui/core/Box';

import { getMonthCalendar } from 'modules/tools/FCalendar';
import Day from 'component/lefts/atom/Day';

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
}));

const MiniCalendar : React.FC<Props> = (props) => {
    const {year, month} = props;
    const monthCalendar = getMonthCalendar(year, month);

    const theme = useTheme();
    const classes = useStyles(theme);

    return(
        <Box>
            <div className={classes.calendar}>
                {monthCalendar.map((week) => (
                    <div className={classes.row}>
                        {
                            week.map((day) => (
                                <Day month={month} day={day}/>
                            ))
                        }
                    </div>
                ))}
            </div>
        </Box>
    )
}

export default MiniCalendar;