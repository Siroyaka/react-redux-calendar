import React from 'react';

const MonthWeekDayParts : React.FC = () => {
    const weekDays = ['日', '月', '火', '水', '木', '金', '土'];
    return(
        <React.Fragment>
            {weekDays.map((wd: string) => (
                <div className='wd'>{wd}</div>
            ))}
        </React.Fragment>
    );
}
export default MonthWeekDayParts;