import React from 'react';
import { useParams } from 'react-router-dom';

import MonthCalender from 'component/month/Calendar';
import { IUrlParams } from 'modules/interface/ICalendar';
import { ContainerProps } from 'containers/RightContainer';

type Props = ContainerProps;

const RightPage = (props: Props) => {
    const {year, month} = useParams<IUrlParams>();
    console.log(year, month);
    const urlMonth = parseInt(month);
    const urlYear = parseInt(year);

    return (
        <MonthCalender year={urlYear} month={urlMonth} />
    );
}

export default RightPage;
