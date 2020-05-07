import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';
import useTheme from '@material-ui/core/styles/useTheme';
import Box from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer';

import MiniCalendar from 'component/lefts/helper/MiniCalendar';
import { DRAWER_WIDTH } from 'state/Constant';
import { ContainerProps } from 'containers/LeftContainer';

type Props = ContainerProps;

const useStyles = makeStyles((theme) => ({
    drawerStyle: {
        width: `${DRAWER_WIDTH}px`,
        flexShrink: 1
    },
    paper: {
        width: `${DRAWER_WIDTH}px`,
        paddingTop: '70px',
        boxSizing: 'border-box'
    },
}));

const LeftPage: React.FC<Props> = (props) => {
    const {year, month, day, leftDrawerVisible} = props;
    const theme = useTheme();
    const classes = useStyles(theme);
    return(
        <Drawer 
            className={classes.drawerStyle}
            open={leftDrawerVisible}
            variant="persistent"
            classes={{
                paper: classes.paper
            }}
        >
            <Box display='flex' justifyContent='center'>
                <MiniCalendar year={year} month={month} day={day}/>
            </Box>
        </Drawer>
    );
}

export default LeftPage;