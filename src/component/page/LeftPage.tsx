import React from 'react';
import { useParams } from 'react-router';

import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';

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
        <Box display='flex' justifyContent='center'>
            <MiniCalendar year={year} month={month}/>
        </Box>
    );
}

export default LeftPage;