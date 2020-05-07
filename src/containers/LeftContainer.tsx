import React from 'react';
// import { bindActionCreators, Dispatch } from 'redux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { StoreState } from 'Store';
import LeftPage from 'component/page/LeftPage';
import { IUrlParams } from 'modules/interface/ICalendar';
import { parseValue } from 'modules/tools/FCalendar';

const mapStateToProps = (state: StoreState) => {
    return {
        leftDrawerVisible: state.leftDrawerReducer.visible
    };
}

const addParamsToState = (up: IUrlParams, state: ReturnType<typeof mapStateToProps>) => {
    const year = parseValue(up.year, 1990);
    const month = parseValue(up.month, 1);
    const day = parseValue(up.day, 1);
    return({...state, year: year, month: month, day: day});
}

export type ContainerProps = ReturnType<typeof addParamsToState>;

const LeftContainer : React.FC = () => {
    const urlParams = useParams<IUrlParams>();
    const state = useSelector(mapStateToProps);
    const stateAddParams = addParamsToState(urlParams, state);
    const containerProps: ContainerProps = { ...stateAddParams };
    return(
        <LeftPage {...containerProps} />
    );
}

export default LeftContainer;