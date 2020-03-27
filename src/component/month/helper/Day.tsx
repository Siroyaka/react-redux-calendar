import React, { useCallback } from 'react';
import clsx from 'clsx';

import TypoGraphy from '@material-ui/core/Typography';
// import makeStyles from '@material-ui/core/styles/makeStyles';
import Paper from '@material-ui/core/Paper';
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
    card: {
        flex: '1 1 0%'

    },
    disablesTypo: {
        color: 'gray'
    },

}));

const MonthDayParts: React.FC<Props> = (props: Props) => {
    const { dates, isDisables, onClick, getSchedule } = props;
    const classes = useStyles();
    const callBack = useCallback(() => (onClick(dates)), [onClick, dates.day]);
    const schedule = getSchedule(dates);

    return(
        <Paper className={classes.card} square variant='outlined' onClick={() => callBack()}>
            <TypoGraphy 
                className={clsx(classes.typo, {[classes.disablesTypo]:isDisables})}
                align='center'
            >
                {dates.day}
            </TypoGraphy>
            {schedule !== null ? schedule.length : null}
        </Paper>
    );
}

export default MonthDayParts;