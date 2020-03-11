import React from 'react';

import TypoGraphy from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Card from '@material-ui/core/Card';

import { IDayFormat } from 'modules/interface/ICalendar';

const useStyles = makeStyles({
    cellStyle: {
        flexBasis: '100%',
    }
});

type Props = IDayFormat;

const MonthDayParts: React.FC<Props> = (props: Props) => {
    const {day} = props;
    const classes = useStyles();
    return(
        <Card className={classes.cellStyle}>
            <TypoGraphy align='center'>{day}</TypoGraphy>
        </Card>
    );
}

export default MonthDayParts;