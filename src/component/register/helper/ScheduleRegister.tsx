import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import makeStyle from '@material-ui/core/styles/makeStyles';

import IConButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import ScheduleIcon from '@material-ui/icons/Schedule';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import NotesIcon from '@material-ui/icons/Notes';

import IconTextField from 'component/register/helper/IconTextField';

interface OwnProps {
    open: boolean,
    value: number,
    onClose: (n: number) => void,
}

type Props = OwnProps;

const useStyles = makeStyle({
    clearButton: {
        position: 'absolute',
        right: '10px',
        top: '5px',
    },
    titleFonts: {
        fontSize: '2em'
    }
});

const ScheduleRegister: React.FC<Props> = (props) => {
    const {open, value, onClose} = props;
    const classes = useStyles();
    return(
        <Dialog onClose={() => onClose(0)} open={open}>
            <Box margin='16px 0' display='flex' flexDirection='column'>
                <Box margin='0 16px' paddingTop='15px' paddingLeft='30px'>
                    <TextField placeholder="タイトルと日時を追加" size='medium' InputProps={{classes: {input: classes.titleFonts}}} />
                </Box>
                <Box margin='30px 0 16px 0'>
                    <IconTextField placeholder='日時' Icon={ScheduleIcon} />
                    <IconTextField placeholder='場所' Icon={LocationOnIcon} />
                    <IconTextField placeholder='説明' Icon={NotesIcon} />
                </Box>
                <Box textAlign='right' margin='0 16px'>
                    <Button variant='contained' color='primary'>保存</Button>
                </Box>
            </Box>
            <IConButton className={classes.clearButton} onClick={() => onClose(0)} size='small'>
                <ClearIcon />
            </IConButton>
        </Dialog>
    );
}

export default ScheduleRegister;