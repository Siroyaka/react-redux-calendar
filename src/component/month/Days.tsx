import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';

import DayParts from 'component/month/helper/DayParts';
import DayNulls from 'component/month/DayNullParts';

const useStyles = makeStyles({
    calendarStyle: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    rowStyle: {
        display: 'flex',
        flexDirection: 'row',
    }
});

interface OwnProps {
    year: number,
    month: number
}

type Props = OwnProps;

const firstWeek = (fw: number, d: number) => {
    let l = [];
    for (let i = 0; i < fw; i++) {
        l.push(<DayNulls />);
    }
    for (let i = 0; i < d; i++) {
        l.push(<DayParts day={i + 1} schedule={[{title: ""}]}/>);
    }
    return l;
}

const Days: React.FC<Props> = (props) => {
    const classes = useStyles();

    const monthDays = new Date(props.year, props.month, 0).getDate();
    const monthStartWeekDay = new Date(props.year, props.month - 1, 1).getDay();

    const firstWeekEndDay = 7 - monthStartWeekDay;

    let t = [];
    t.push(firstWeek(monthStartWeekDay, firstWeekEndDay))

    for (let i = firstWeekEndDay + 1; i < monthDays + 1;) {
        let lst = [];
        const nextWeekDay = i + 7;
        for (i; i < nextWeekDay && i < monthDays + 1; i++) {
            lst.push(<DayParts day={i} schedule={[{title: ""}]} />);
        }
        for (i; i < nextWeekDay; i++) {
            lst.push(<DayNulls />);
        }
        t.push(lst);
    }

    return(
        <div className={classes.calendarStyle}>
            {t.map((week) => (
                <div className={classes.rowStyle}>
                    {week}
                </div>
            ))}
        </div>
    );

}

export default Days;