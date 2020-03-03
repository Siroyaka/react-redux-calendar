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
    const prev = m - 1 < 1 ? 12 : m - 1;
    const next = m + 1 > 12 ? 1 : m + 1;

    return(
        <div className={classes.divStyle}>
            <PrevSelector link={prev} />
            <NextSelector link={next} />
            <Typography className={classes.monthViews}>{id}月</Typography>
        </div>
    );
}

export default Header;