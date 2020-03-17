import React from 'react';

import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import makeStyles from '@material-ui/core/styles/makeStyles';

interface OwnProps {
    Icon: React.FC,
    placeholder?: string
}

type Props = OwnProps;

const useStyles = makeStyles({
    textfields: {
        marginLeft: '30px'
    }
});

const IconTextField: React.FC<Props> = (props) => {
    const {Icon, placeholder} = props;
    const classes = useStyles();
    return(
        <Box margin='10px 20px' display='flex' flexDirection='row'>
            <Icon />
            <TextField className={classes.textfields} fullWidth placeholder={placeholder} size='small'/>
        </Box>
    )
}

export default IconTextField;