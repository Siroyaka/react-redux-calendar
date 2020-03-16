import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

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
            <TextField type="title" />
            <TextField type="memo" />
        </Dialog>
    );
}

export default ScheduleRegister;