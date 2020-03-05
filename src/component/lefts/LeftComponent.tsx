import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
    conponentStyle: {
        backgroundColor: 'blue'
    }
})

const LeftComponent: React.FC = () => {
    const classes = useStyles();
    return(
        <div className={classes.conponentStyle}>
            a
        </div>
    );
}

export default LeftComponent;