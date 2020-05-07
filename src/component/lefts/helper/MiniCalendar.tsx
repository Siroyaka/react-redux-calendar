import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';
import useTheme from '@material-ui/core/styles/useTheme';
import Box from '@material-ui/core/Box';

import { getMonthCalendar } from 'modules/tools/FCalendar';
import Day from 'component/lefts/atom/Day';
import WeekDays from 'component/lefts/standalone/WeekDays';
import { Typography } from '@material-ui/core';
import PageSelectors from 'component/lefts/helper/PageSelectorMiniCalendar';

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
    const {year, month} = props;
    const [nowMonth, setNowMonth] = React.useState(month);
    const [nowYear, setNowYear] = React.useState(year);
    const [calendar, setCalendar] = React.useState(getMonthCalendar(nowYear, nowMonth));
    React.useEffect(
        () => {
            setNowMonth(month);
            setNowYear(year);
            setCalendar(getMonthCalendar(year, month));
        }, [year, month]
    );
    const updateCalendar = React.useCallback((y: number, m: number) => {
        setNowMonth(m);
        setNowYear(y);
        setCalendar(getMonthCalendar(y, m));
    }, [setNowMonth, setNowYear, setCalendar]);

    const theme = useTheme();
    const classes = useStyles(theme);

    return(
        <Box>
            <Box paddingLeft='10px' display='flex' flexDirection='row' justifyContent='space-Between'>
                <Box paddingTop='5px'>
                    <Typography>{nowYear}年{nowMonth}月</Typography>
                </Box>
                <Box>
                    <PageSelectors year={nowYear} month={nowMonth} onClick={updateCalendar} />
                </Box>
            </Box>
            <Box>
                <WeekDays />
                <div className={classes.calendar}>
                    {calendar.map((week) => (
                        <div className={classes.row}>
                            {
                                week.map((date) => (
                                    <Day mainMonth={nowMonth} date={date}/>
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