import React from 'react';

import Header from 'component/header/Header';
import LeftContainer from 'containers/LeftContainer';
import RightContainer from 'containers/RightContainer';
import './Overview.css';
import makeStyles from '@material-ui/core/styles/makeStyles';

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
            <header className={classes.headerStyle}>
                <Header />
            </header>
            <div className={classes.bodyStyle}>
                <LeftContainer />
                <RightContainer />
            </div>
        </div>
    );
}

export default Overview;
