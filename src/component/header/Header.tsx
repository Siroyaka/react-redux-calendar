import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';
import useTheme from '@material-ui/core/styles/useTheme';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

import MenuIcon from '@material-ui/icons/Menu';

import PageSelectors, { SelectorMode } from 'component/header/PageSelector';
import CalendarTitle from 'component/header/standalone/CalendarTitle';
import { ContainerProps } from 'containers/HeaderContainer';

type Props = ContainerProps;

const useStyle = makeStyles((theme) => ({
    appBarStyle: {
        height: '64px',
        zIndex: theme.zIndex.drawer + 1
    },
    divStyle: {
        display: "flex",
        flexDirection: "row" 
    },
    monthViews: {
        textAlign: "center",
        fontSize: "30px"
    },
    hambergerButton: {
        cursor: 'pointer',
    }
}));

const Header: React.FC<Props> = (props) => {
    const {year, month, day, leftDrawerVisible, switchLeftDrawerVisible} = props;

    const theme = useTheme();
    const classes = useStyle(theme);

    return(
        <AppBar className={classes.appBarStyle}>
            <ToolBar>
                <IconButton onClick={() => switchLeftDrawerVisible(leftDrawerVisible)}>
                    <MenuIcon/>
                </IconButton>
                <CalendarTitle />
                <PageSelectors year={year} month={month} day={day} mode={SelectorMode.MONTH} />
                <Typography className={classes.monthViews} variant='h6'>{year}年{month}月</Typography>
            </ToolBar>
        </AppBar>
    );
}

export default Header;