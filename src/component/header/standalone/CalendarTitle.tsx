import React from 'react';

import Icon from '@material-ui/icons/CalendarToday';
import Typography from '@material-ui/core/Typography';

const CalendarTitle: React.FC = () => {
    return(
        <React.Fragment>
            <Icon />
            <Typography variant='h6'>カレンダー</Typography>
        </React.Fragment>
    );
}
export default CalendarTitle;