import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';
import Drawer from '@material-ui/core/Drawer';

import LeftContainer from 'containers/LeftContainer';
import RightContainer from 'containers/RightContainer';
import './Overview.css';

const useStyles = makeStyles({
    bodyStyle: {
        paddingTop: '70px',
        boxSizing: 'border-box',
        display: 'flex'
    },
    drawerStyle: {
        width: '20%',
        flexShrink: 0
    },
    paper: {
        width: '20%',
        paddingTop: '70px',
        boxSizing: 'border-box'
    },
    rightStyle: {
        paddingLeft: '5px'
    }
});

const Overview : React.FC = () => {
    const classes = useStyles();
    return(
        <div className={classes.bodyStyle}>
            <Drawer 
                className={classes.drawerStyle}
                open={true}
                variant="permanent"
                classes={{
                    paper: classes.paper
                }}
                >
                <LeftContainer />
            </Drawer>
            <div className={classes.rightStyle}>
                <RightContainer />
            </div>
        </div>
    );
}

export default Overview;
