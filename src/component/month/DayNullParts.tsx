import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';
import Card from '@material-ui/core/Card';

interface OwnProps {

}

type Props = OwnProps;

const useStyles = makeStyles({
    cellStyle: {
        flexBasis: '100%',
    }
});

const MonthDayNull: React.FC<Props> = (props: Props) => {
    const classes = useStyles();
    return(
        <Card className={classes.cellStyle}>
        </Card>
    );
}

export default MonthDayNull;