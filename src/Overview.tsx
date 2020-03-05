import React from 'react';
import clsx from 'clsx';

import makeStyles from '@material-ui/core/styles/makeStyles';
import Drawer from '@material-ui/core/Drawer';

import LeftContainer from 'containers/LeftContainer';
import RightContainer from 'containers/RightContainer';
import './Overview.css';
import { useSelector } from 'react-redux';
import { StoreState } from 'Store';

const drawerWidth = 256;

const useStyles = makeStyles({
    bodyStyle: {
        paddingTop: '70px',
        boxSizing: 'border-box',
        display: 'flex'
    },
    drawerStyle: {
        width: `${drawerWidth}px`,
        flexShrink: 0
    },
    paper: {
        width: `${drawerWidth}px`,
        paddingTop: '70px',
        boxSizing: 'border-box'
    },
    rightStyle: {
        marginLeft: -drawerWidth,
        paddingLeft: '5px'
    },
    rightStyleShift: {
        marginLeft: 0,
        paddingLeft: '5px'
    }
});

const Overview : React.FC = () => {
    const classes = useStyles();
    const viewLeftMenu = useSelector((state: StoreState) => state.viewLeftMenu)
    console.log('overview', viewLeftMenu);
    return(
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
    );
}

export default Overview;
