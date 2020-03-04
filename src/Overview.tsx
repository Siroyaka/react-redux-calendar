import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';
import Drawer from '@material-ui/core/Drawer';

import Header from 'component/header/Header';
import LeftContainer from 'containers/LeftContainer';
import RightContainer from 'containers/RightContainer';
import './Overview.css';

const useStyles = makeStyles({
    viewStyle: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%'
    },
    headerStyle: {
        flexBasis: '10%'
    },
    bodyStyle: {
        display: 'flex',
        flexBasis: 'auto',
        flexDirection: 'row',
        height: '100%',
        width: '100%'
    }
});

const Overview : React.FC = () => {
    const classes = useStyles();
    return(
        <div className={classes.viewStyle}>
            <div className={classes.bodyStyle}>
                <Drawer
                    open={true}
                    >

                    <LeftContainer />
                </Drawer>
                <RightContainer />
            </div>
        </div>
    );
}

export default Overview;
