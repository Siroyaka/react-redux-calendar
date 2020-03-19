import React, { useCallback } from 'react';
import clsx from 'clsx';

import TypoGraphy from '@material-ui/core/Typography';
// import makeStyles from '@material-ui/core/styles/makeStyles';
import Paper from '@material-ui/core/Paper';
import makeStyle from '@material-ui/core/styles/makeStyles';

import { ICalendarDays } from 'modules/interface/ICalendar';

interface OwnProps {
    day: ICalendarDays,
    isDisables: boolean,
    onClick: (n: number) => void,
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
    const { day, isDisables, onClick } = props;
    const classes = useStyles();
    const callBack = useCallback(() => (onClick(day.day)), [onClick, day.day]);

    return(
        <Paper className={classes.card} square variant='outlined' onClick={() => callBack()}>
            <TypoGraphy 
                className={clsx(classes.typo, {[classes.disablesTypo]:isDisables})}
                align='center'
            >
                {day.day}
            </TypoGraphy>
        </Paper>
    );
}

export default MonthDayParts;