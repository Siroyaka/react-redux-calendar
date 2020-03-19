import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';
import useTheme from '@material-ui/core/styles/useTheme';
import Box from '@material-ui/core/Box';

import { getMonthCalendar } from 'modules/tools/FCalendar';
import Day from 'component/lefts/atom/Day';
import WeekDays from 'component/lefts/standalone/WeekDays';
import { Typography } from '@material-ui/core';
import PageSelectors, { SelectorMode } from 'component/header/PageSelector';

interface OwnProps {
    year: number,
    month: number,
    day: number,
}

type Props = OwnProps;

const useStyles = makeStyles((theme) => ({
    calendar: {
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
    },
}));

const MiniCalendar : React.FC<Props> = (props) => {
    const {year, month, day} = props;
    const monthCalendar = getMonthCalendar(year, month);

    const theme = useTheme();
    const classes = useStyles(theme);

    return(
        <Box>
            <Box paddingLeft='10px' display='flex' flexDirection='row' justifyContent='space-Between'>
                <Box paddingTop='5px'>
                    <Typography>{year}年{month}月</Typography>
                </Box>
                <Box>
                    <PageSelectors year={year} month={month} day={day} mode={SelectorMode.MONTH} />
                </Box>
            </Box>
            <Box>
                <WeekDays />
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
        </Box>
    )
}

export default MiniCalendar;