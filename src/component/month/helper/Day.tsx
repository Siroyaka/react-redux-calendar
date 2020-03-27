import React, { useCallback } from 'react';
import clsx from 'clsx';

import TypoGraphy from '@material-ui/core/Typography';
// import makeStyles from '@material-ui/core/styles/makeStyles';
import Paper from '@material-ui/core/Paper';
import makeStyle from '@material-ui/core/styles/makeStyles';

import { ICalendarDays, ISchedule } from 'modules/interface/ICalendar';

interface OwnProps {
    day: ICalendarDays,
    isDisables: boolean,
    getSchedule: (date: ICalendarDays) => ISchedule[] | null,
    onClick: (date: ICalendarDays) => void,
}

type Props = OwnProps;

const useStyles = makeStyle(() => ({
    typo: {

    },
    card: {
        flex: '1 1 0%'

    },
    disablesTypo: {
        color: 'gray'
    },

}));

const MonthDayParts: React.FC<Props> = (props: Props) => {
    const { day, isDisables, onClick, getSchedule } = props;
    const classes = useStyles();
    const callBack = useCallback(() => (onClick(day)), [onClick, day.day]);
    const schedule = getSchedule(day);

    return(
        <Paper className={classes.card} square variant='outlined' onClick={() => callBack()}>
            <TypoGraphy 
                className={clsx(classes.typo, {[classes.disablesTypo]:isDisables})}
                align='center'
            >
                {day.month}月{day.day}日
            </TypoGraphy>
            {schedule !== null ? schedule.length : null}
        </Paper>
    );
}

export default MonthDayParts;