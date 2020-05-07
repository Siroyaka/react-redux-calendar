import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';
import useTheme from '@material-ui/core/styles/useTheme';

import LeftContainer from 'containers/LeftContainer';
import RightContainer from 'containers/RightContainer';
import HeaderContainer from 'containers/HeaderContainer';

const useStyles = makeStyles((theme) => ({
    bodyStyle: {
        height: '100%',
        paddingTop: '70px',
        boxSizing: 'border-box',
        display: 'flex'
    },
}));

const Overview : React.FC = () => {
    const theme = useTheme();
    const classes = useStyles(theme);
    return(
        <React.Fragment>
            <HeaderContainer />
            <div className={classes.bodyStyle}>
                <LeftContainer />
                <RightContainer />
            </div>
        </React.Fragment>
    );
}

export default Overview;
