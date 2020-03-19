import React from 'react';
import { useParams } from 'react-router';

import Box from '@material-ui/core/Box';

import MiniCalendar from 'component/lefts/helper/MiniCalendar';
import { IUrlParams } from 'modules/interface/ICalendar';

const LeftPage: React.FC = () => {
    const param = useParams<IUrlParams>();
    const year = parseInt(param.year);
    const month = parseInt(param.month);
    const day = parseInt(param.day);
    return(
        <Box display='flex' justifyContent='center'>
            <MiniCalendar year={year} month={month} day={day}/>
        </Box>
    );
}

export default LeftPage;