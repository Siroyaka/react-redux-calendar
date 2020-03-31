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

import { ISchedule } from 'modules/interface/ICalendar';

interface OwnProps {
    open: boolean,
    schedule: ISchedule,
    index: number,
    onClose: () => void,
    deleteSchedule: (s: ISchedule, i: number) => void,
    updateSchedule: (s: ISchedule, i: number) => void,
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

const dateToView = (y: number, m: number, d: number): string => {
    const value = y + '年' + m + '月' + d + '日';
    return value;
}

const ShowScheduleDialog: React.FC<Props> = (props) => {
    const { open, index, schedule, onClose, deleteSchedule, updateSchedule } = props;
    const classes = useStyles();

    const [title, setTitle] = React.useState<string|null>(null);
    const [place, setPlace] = React.useState<string|null>(null);
    const [memo, setMemo] = React.useState<string|null>(null);
    // const [date, setDate] = React.useState(dateValue);
    const d = dateToView(schedule.year, schedule.month, schedule.day);
    const clickUpdate = React.useCallback(() => {
        const newTitle = title !== null ? title : schedule.title;
        const newPlace = place !== null ? place : schedule.place;
        const newMemo = memo !== null ? memo : schedule.memo;
        updateSchedule({
            ...schedule, 
            title: newTitle,
            place: newPlace,
            memo: newMemo,
        }, index);
        onClose();
    }, [schedule, title, place, memo, updateSchedule, index, onClose]);

    const clickDelete = React.useCallback(() => {
        deleteSchedule(schedule, index);
        onClose();
    }, [deleteSchedule, schedule, index, onClose]);

    return(
        <Dialog onClose={onClose} open={open}>
            <Box margin='16px 0' display='flex' flexDirection='column'>
                <Box margin='0 16px' paddingTop='15px' paddingLeft='30px'>
                    <TextField onChange={((t) => setTitle(t.target.value))} placeholder="タイトルを追加" size='medium' InputProps={{classes: {input: classes.titleFonts}}} defaultValue={schedule.title} />
                </Box>
                <Box margin='30px 0 16px 0'>
                    <IconTextField placeholder='日時' fullWidth size='small' disabled Icon={ScheduleIcon} defaultValue={d} />
                    <IconTextField placeholder='場所' fullWidth size='small' Icon={LocationOnIcon} onChange={(t) => setPlace(t.target.value)} defaultValue={schedule.place}/>
                    <IconTextField placeholder='説明' fullWidth size='small' Icon={NotesIcon} onChange={(t) => setMemo(t.target.value)} defaultValue={schedule.memo}/>
                </Box>
                <Box display='flex' justifyContent='end' margin='0 16px'>
                    <Button variant='contained' color='primary' onClick={() => clickUpdate()}>上書き</Button>
                    <Button variant='contained' color='primary' onClick={() => clickDelete()}>削除</Button>
                </Box>
            </Box>
            <IConButton className={classes.clearButton} onClick={onClose} size='small'>
                <ClearIcon />
            </IConButton>
        </Dialog>
    )
}

export default ShowScheduleDialog;