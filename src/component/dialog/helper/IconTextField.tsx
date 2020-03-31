import React from 'react';

import Box from '@material-ui/core/Box';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import makeStyles from '@material-ui/core/styles/makeStyles';

interface OwnProps {
    Icon: React.FC,
}

type Props = OwnProps & TextFieldProps;

const useStyles = makeStyles({
    textfields: {
        marginLeft: '30px'
    }
});

const IconTextField: React.FC<Props> = (props) => {
    const {Icon, ...textFieldProps} = props;
    const classes = useStyles();
    return(
        <Box margin='10px 20px' display='flex' flexDirection='row'>
            <Icon />
            <TextField 
                {...textFieldProps}
                className={classes.textfields}
            />
        </Box>
    )
}

export default IconTextField;