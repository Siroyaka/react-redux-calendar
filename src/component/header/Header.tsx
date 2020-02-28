import React from 'react';
import { useParams } from 'react-router-dom';

import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';

import { NextSelector, PrevSelector } from 'component/pub/PageSelector';

interface OwnProps {

}

type Props = OwnProps;

const useStyle = makeStyles({
    divStyle: {
        display: "flex",
        flexDirection: "row" 
    },
    monthViews: {
        textAlign: "center",
        fontSize: "30px"
    }

});

const Header: React.FC<Props> = (props) => {
    const {id} = useParams<{id: string|undefined}>();
    const m = parseInt(id);
    const classes = useStyle();

    return(
        <div className={classes.divStyle}>
            <PrevSelector link={m-1} />
            <NextSelector link={m+1} />
            <Typography className={classes.monthViews}>{id}月</Typography>
        </div>
    );
}

export default Header;