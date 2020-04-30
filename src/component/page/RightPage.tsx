import React from 'react';

import MonthCalender from 'component/month/Calendar';
import { ContainerProps } from 'containers/RightContainer';

type Props = ContainerProps;

const RightPage = (props: Props) => {
    return (
        <MonthCalender {...props} />
    );
}

export default RightPage;
