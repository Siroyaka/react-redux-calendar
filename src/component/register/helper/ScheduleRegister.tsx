import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import IConButton from '@material-ui/core/IconButton';

interface OwnProps {
    open: boolean,
    value: number,
    onClose: (n: number) => void,
}

type Props = OwnProps;

const ScheduleRegister: React.FC<Props> = (props) => {
    const {open, value, onClose} = props;
    return(
        <Dialog onClose={() => onClose(0)} open={open}>
            <Box margin='16px 0' display='flex' flexDirection='column'>
                <Box margin='0 16px' paddingLeft='30px'>
                    <TextField label="title" size='medium'/>
                </Box>
                <Box margin='16px 20px'>
                    <TextField label="memo" variant='filled' size='small'/>
                </Box>
            </Box>
        </Dialog>
    );
}

export default ScheduleRegister;