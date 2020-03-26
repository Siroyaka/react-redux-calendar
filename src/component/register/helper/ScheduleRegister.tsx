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

import { ISchedule, ICalendarDays } from 'modules/interface/ICalendar';

interface OwnProps {
    open: boolean,
    dateValue: ICalendarDays,
    onClose: () => void,
    pushSchedule: (s: ISchedule) => void
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

const dateToView = (d?: ICalendarDays): string => {
    if (d === null || d === undefined) {return "";}
    return d.year + '年' + d.month + '月' + d.day;
}

const ScheduleRegister: React.FC<Props> = (props) => {
    const {open, onClose, dateValue, pushSchedule} = props;
    const [title, setTitle] = React.useState("");
    const [place, setPlace] = React.useState("");
    const [memo, setMemo] = React.useState("");
    const [date, setDate] = React.useState(dateToView(dateValue));
    const save = React.useCallback(() => {
        if (title === "") {return;}
        if (dateValue === undefined) {return;}
        pushSchedule({
            title: title,
            place: place,
            memo: memo,
            year: dateValue.year,
            month: dateValue.month,
            day: dateValue.day,
            time: "00:00:00"
        });
    }, [dateValue, title, place, memo, date, pushSchedule]);

    const classes = useStyles();
    return(
        <Dialog onClose={onClose} open={open}>
            <Box margin='16px 0' display='flex' flexDirection='column'>
                <Box margin='0 16px' paddingTop='15px' paddingLeft='30px'>
                    <TextField onChange={((t) => setTitle(t.target.value))} placeholder="タイトルを追加" size='medium' InputProps={{classes: {input: classes.titleFonts}}} />
                </Box>
                <Box margin='30px 0 16px 0'>
                    <IconTextField placeholder='日時' Icon={ScheduleIcon} defaultValue={date} />
                    <IconTextField placeholder='場所' Icon={LocationOnIcon} />
                    <IconTextField placeholder='説明' Icon={NotesIcon} />
                </Box>
                <Box textAlign='right' margin='0 16px'>
                    <Button variant='contained' color='primary'>保存</Button>
                </Box>
            </Box>
            <IConButton className={classes.clearButton} onClick={onClose} size='small'>
                <ClearIcon />
            </IConButton>
        </Dialog>
    );
}

export default ScheduleRegister;