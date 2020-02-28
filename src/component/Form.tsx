import React from 'react';
import { useParams } from 'react-router-dom';

import 'component/CalendarForm.css';
import MonthCalender from 'component/month/Calendar';
import { IMonthFormat } from 'modules/interface/ICalendar';
import { ContainerProps } from '../containers/index';

interface RouteParams {
    id: string | undefined
}

interface OwnProps {
}

const getData = (month: number, data: IMonthFormat[]) => {
    let a = data.find(d => d.month === month);
    if (a === undefined) return data[0];
    return a;
}

type Props = ContainerProps;

const CalendarForm = (props: Props) => {
    const {id} = useParams<RouteParams>();
    const {schedules} = props;
    const urlMonth = parseInt(id);

    let monthData = getData(urlMonth, schedules);
    return (
        <MonthCalender {...monthData} />
    );
}

export default CalendarForm;
