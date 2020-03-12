import React from 'react';
import { useParams } from 'react-router';

import makeStyles from '@material-ui/core/styles/makeStyles';

import MiniCalendar from 'component/lefts/helper/MiniCalendar';
import { IUrlParams } from 'modules/interface/ICalendar';

const useStyles = makeStyles({
    componentStyle: {
    },
})

const LeftPage: React.FC = () => {
    const param = useParams<IUrlParams>();
    const classes = useStyles();
    const year = parseInt(param.year);
    const month = parseInt(param.month);
    return(
        <div className={classes.componentStyle}>
            <MiniCalendar year={year} month={month}/>
        </div>
    );
}

export default LeftPage;