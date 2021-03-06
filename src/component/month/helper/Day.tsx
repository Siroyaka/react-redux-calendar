import React, { useCallback } from 'react';
import clsx from 'clsx';

import TypoGraphy from '@material-ui/core/Typography';
// import makeStyles from '@material-ui/core/styles/makeStyles';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Box from '@material-ui/core/Box';
import makeStyle from '@material-ui/core/styles/makeStyles';

import { IDate, ISchedule } from 'modules/interface/ICalendar';

interface OwnProps {
    date: IDate,
    isDisables: boolean,
    schedules: ISchedule[] | null,
    onClick: (date: IDate) => void,
    onClickSchedule: (date: IDate, schedule: ISchedule) => void,
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
    const { date, isDisables, onClick, onClickSchedule, schedules } = props;
    const classes = useStyles();
    const showSchedule = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>, s: ISchedule, index: number) => {
        e.stopPropagation();
        onClickSchedule(date, s)
    }, [onClickSchedule, date]);
    const cards = () => {
        if (schedules === null) {return null;}
        return(
            <Box display='flex' alignItems='center' flexDirection='column' overflow='hidden' minWidth='0' minHeight='0' >
                {schedules.map((val, i) => (
                    <Card className={classes.scheduleCard} onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => showSchedule(e, val, i)}>
                        <CardActionArea>
                            <Box width='95%' paddingLeft='2%' overflow='hidden' whiteSpace='nowrap' textOverflow='...'>
                                {val.title}
                            </Box>
                        </CardActionArea>
                    </Card>
                ))}
            </Box>
        );
    }

    return(
        <Paper className={classes.paper} square variant='outlined' onClick={() => onClick(date)}>
            <TypoGraphy 
                className={clsx(classes.typo, {[classes.disablesTypo]:isDisables})}
                align='center'
            >
                {date.day}
            </TypoGraphy>
            {cards()}
        </Paper>
    );
}

export default MonthDayParts;