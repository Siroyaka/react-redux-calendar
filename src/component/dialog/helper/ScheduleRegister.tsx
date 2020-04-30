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

import IconTextField from 'component/dialog/helper/IconTextField';

import { IScheduleWithoutId, IDate } from 'modules/interface/ICalendar';

interface OwnProps {
    open: boolean,
    dateValue: IDate,
    onClose: () => void,
    pushSchedule: (s: IScheduleWithoutId, d: IDate) => void
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

const dateToView = (d?: IDate): string => {
    if (d === null || d === undefined) {return "";}
    const value = d.year + '年' + d.month + '月' + d.day + '日';
    return value;
}

const ScheduleRegister: React.FC<Props> = (props) => {
    const {open, onClose, dateValue, pushSchedule} = props;
    const [title, setTitle] = React.useState("");
    const [place, setPlace] = React.useState("");
    const [memo, setMemo] = React.useState("");
    // const [date, setDate] = React.useState(dateValue);
    const d = dateToView(dateValue);
    const save = React.useCallback(() => {
        if (title === "") {return;}
        if (dateValue === undefined) {
            onClose();
            return;
        }
        pushSchedule({
            title: title,
            place: place,
            memo: memo,
            time: "00:00:00"
        }, dateValue);
        onClose();
    }, [dateValue, title, place, memo, pushSchedule, onClose]);

    const classes = useStyles();
    return(
        <Dialog onClose={onClose} open={open}>
            <Box margin='16px 0' display='flex' flexDirection='column'>
                <Box margin='0 16px' paddingTop='15px' paddingLeft='30px'>
                    <TextField onChange={((t) => setTitle(t.target.value))} placeholder="タイトルを追加" size='medium' InputProps={{classes: {input: classes.titleFonts}}} />
                </Box>
                <Box margin='30px 0 16px 0'>
                    <IconTextField placeholder='日時' fullWidth size='small' disabled Icon={ScheduleIcon} defaultValue={d} />
                    <IconTextField placeholder='場所' fullWidth size='small' Icon={LocationOnIcon} onChange={(t) => setPlace(t.target.value)} />
                    <IconTextField placeholder='説明' fullWidth size='small' Icon={NotesIcon} onChange={(t) => setMemo(t.target.value)}/>
                </Box>
                <Box textAlign='right' margin='0 16px'>
                    <Button variant='contained' color='primary' onClick={() => save()}>保存</Button>
                </Box>
            </Box>
            <IConButton className={classes.clearButton} onClick={onClose} size='small'>
                <ClearIcon />
            </IConButton>
        </Dialog>
    );
}

export default ScheduleRegister;