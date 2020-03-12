import React from 'react';
import clsx from 'clsx';

import makeStyles from '@material-ui/core/styles/makeStyles';
import useTheme from '@material-ui/core/styles/useTheme';
import Drawer from '@material-ui/core/Drawer';

import LeftContainer from 'containers/LeftContainer';
import RightContainer from 'containers/RightContainer';
import { useSelector } from 'react-redux';
import { StoreState } from 'Store';
import Header from 'component/header/Header';

const drawerWidth = 256;

const useStyles = makeStyles((theme) => ({
    bodyStyle: {
        height: '100%',
        paddingTop: '70px',
        boxSizing: 'border-box',
        display: 'flex'
    },
    drawerStyle: {
        width: `${drawerWidth}px`,
        flexShrink: 1
    },
    paper: {
        width: `${drawerWidth}px`,
        paddingTop: '70px',
        boxSizing: 'border-box'
    },
    rightStyle: {
        marginLeft: -drawerWidth,
        paddingLeft: '5px',
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeIn,
            duration: theme.transitions.duration.leavingScreen
        }),
        flex: '1 1 0%'
    },
    rightStyleShift: {
        marginLeft: 0,
        paddingLeft: '5px',
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
    }
}));

const Overview : React.FC = () => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const viewLeftMenu = useSelector((state: StoreState) => state.viewLeftMenu)
    return(
        <React.Fragment>
            <Header />
            <div className={classes.bodyStyle}>
                <Drawer 
                    className={classes.drawerStyle}
                    open={viewLeftMenu}
                    variant="persistent"
                    classes={{
                        paper: classes.paper
                    }}
                >
                    <LeftContainer />
                </Drawer>
                <div className={clsx(classes.rightStyle, {[classes.rightStyleShift]: viewLeftMenu})}>
                    <RightContainer />
                </div>
            </div>
        </React.Fragment>
    );
}

export default Overview;
