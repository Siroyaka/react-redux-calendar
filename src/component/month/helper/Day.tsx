import React from 'react';
import clsx from 'clsx';

import TypoGraphy from '@material-ui/core/Typography';
// import makeStyles from '@material-ui/core/styles/makeStyles';
import Paper from '@material-ui/core/Paper';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import makeStyle from '@material-ui/core/styles/makeStyles';

import { ICalendarDays } from 'modules/interface/ICalendar';

interface OwnProps {
    day: ICalendarDays,
    isDisables: boolean
}

type Props = OwnProps;

const useStyles = makeStyle(() => ({
    typo: {

    },
    card: {

    },
    disablesTypo: {
        color: 'gray'
    },

}));

const MonthDayParts: React.FC<Props> = (props: Props) => {
    const { day, isDisables } = props;
    const classes = useStyles();

    return(
        <Paper className={classes.card} square variant='outlined'>
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