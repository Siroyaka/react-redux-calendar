import React, { useCallback } from 'react';
import { useParams } from 'react-router-dom';

import makeStyles from '@material-ui/core/styles/makeStyles';
import useTheme from '@material-ui/core/styles/useTheme';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import DehazeIcon from '@material-ui/icons/Dehaze';

import { NextSelector, PrevSelector } from 'component/pub/PageSelector';
import { useDispatch } from 'react-redux';
import { ActionTypes } from 'modules/Module';

interface OwnProps {
}

type Props = OwnProps;

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
    }
}));

const Header: React.FC<Props> = (props) => {
    const {id} = useParams<{id: string|undefined}>();
    const dispatch = useDispatch();
    const changeViewingAction = useCallback(
        () => dispatch({type: ActionTypes.CHANGEVIEWINGLEFTMENU}),
        [dispatch]
    );
    const m = parseInt(id);
    const theme = useTheme();
    const classes = useStyle(theme);
    const prev = m - 1 < 1 ? 12 : m - 1;
    const next = m + 1 > 12 ? 1 : m + 1;

    return(
        <AppBar className={classes.appBarStyle}>
            <ToolBar>
                <DehazeIcon onClick={changeViewingAction}/>
                <PrevSelector link={prev} />
                <NextSelector link={next} />
                <Typography className={classes.monthViews}>{id}月</Typography>
            </ToolBar>
        </AppBar>
    );
}

export default Header;