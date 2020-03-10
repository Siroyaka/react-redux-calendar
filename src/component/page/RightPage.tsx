import React from 'react';
import { useParams } from 'react-router-dom';

import MonthCalender from 'component/month/Calendar';
import { IMonthFormat } from 'modules/interface/ICalendar';
import { ContainerProps } from 'containers/RightContainer';

interface RouteParams {
    id: string | undefined
}

const getData = (month: number, data: IMonthFormat[]) => {
    let a = data.find(d => d.month === month);
    if (a === undefined) a = data[0];
    return {...a, month: month};
}

type Props = ContainerProps;

const RightPage = (props: Props) => {
    const {id} = useParams<RouteParams>();
    const {schedules} = props;
    const urlMonth = parseInt(id);

    let monthData = getData(urlMonth, schedules);
    return (
        <MonthCalender {...monthData} />
    );
}

export default RightPage;
