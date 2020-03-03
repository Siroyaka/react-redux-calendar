import React from 'react';
import DayParts from 'component/month/DayParts';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
    calendarStyel: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    rowStyle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
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
        l.push(<DayParts day={0} schedule={[{title: "before"}]}/>);
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
        for (let u = 0; u < 7; u++) {
            lst.push(<DayParts day={i} schedule={[{title: ""}]} />);
            i++;
        }
        t.push(lst);
    }

    return(
        <div>
            {t.map((week) => (
                <div className={classes.rowStyle}>
                    {week}
                </div>
            ))}
        </div>
    );

}

export default Days;