import React, { useCallback } from 'react';
import clsx from 'clsx';

import TypoGraphy from '@material-ui/core/Typography';
// import makeStyles from '@material-ui/core/styles/makeStyles';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import makeStyle from '@material-ui/core/styles/makeStyles';

import { ICalendarDays, ISchedule } from 'modules/interface/ICalendar';

interface OwnProps {
    dates: ICalendarDays,
    isDisables: boolean,
    getSchedule: (date: ICalendarDays) => ISchedule[] | null,
    onClick: (date: ICalendarDays) => void,
}

type Props = OwnProps;

const useStyles = makeStyle(() => ({
    typo: {

    },
    paper: {
        flex: '1 1 0%',
        minWidth: '0',
        minHeight: '0',
    },
    disablesTypo: {
        color: 'gray'
    },
    scheduleCard: {
        overflow: 'hidden',
        backgroundColor: 'rgba(243, 190, 185, 0.7)',
        width: '95%',
    }

}));

const MonthDayParts: React.FC<Props> = (props: Props) => {
    const { dates, isDisables, onClick, getSchedule } = props;
    const classes = useStyles();
    const registerSchedule = useCallback(() => (onClick(dates)), [onClick, dates]);
    const schedule = getSchedule(dates);
    const cards = () => {
        if (schedule === null) {return null;}
        return(
            <Box display='flex' alignItems='center' flexDirection='column' overflow='hidden' minWidth='0' minHeight='0' >
                {schedule.map((val, i) => (
                    <Card className={classes.scheduleCard}>
                        <Box width='95%' paddingLeft='2%' overflow='hidden' whiteSpace='nowrap' textOverflow='...'>
                            {val.title}
                        </Box>
                    </Card>
                ))}
            </Box>
        );
    }

    return(
        <Paper className={classes.paper} square variant='outlined' onClick={() => registerSchedule()}>
            <TypoGraphy 
                className={clsx(classes.typo, {[classes.disablesTypo]:isDisables})}
                align='center'
            >
                {dates.day}
            </TypoGraphy>
            {cards()}
        </Paper>
    );
}

export default MonthDayParts;