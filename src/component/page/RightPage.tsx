import React from 'react';
import clsx from 'clsx';

import makeStyles from '@material-ui/core/styles/makeStyles';
import useTheme from '@material-ui/core/styles/useTheme';

import MonthCalender from 'component/month/Calendar';
import { ContainerProps } from 'containers/RightContainer';
import { DRAWER_WIDTH } from 'state/Constant';

type Props = ContainerProps;

const useStyles = makeStyles((theme) => ({
    bodyStyle: {
        height: '100%',
        paddingTop: '70px',
        boxSizing: 'border-box',
        display: 'flex'
    },
    drawerStyle: {
        width: `${DRAWER_WIDTH}px`,
        flexShrink: 1
    },
    paper: {
        width: `${DRAWER_WIDTH}px`,
        paddingTop: '70px',
        boxSizing: 'border-box'
    },
    rightStyle: {
        marginLeft: -DRAWER_WIDTH,
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

const RightPage = (props: Props) => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const { leftDrawerVisible } = props;
    return (
        <div className={clsx(classes.rightStyle, {[classes.rightStyleShift]: leftDrawerVisible})}>
            <MonthCalender {...props} />
        </div>
    );
}

export default RightPage;
