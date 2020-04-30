import React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import CalendarForm from 'component/page/RightPage';
import { StoreState } from 'Store';
import actions from 'state/Schedules/actions';
import { IUrlParams } from 'modules/interface/ICalendar';

const parseValue = (s: string, d: number) => {
    const n = parseInt(s);
    return isNaN(n) ? d : n;
}

const mapStateToProps = (state: StoreState) => {
    return { ...state };
}

const addParamsToState = (up: IUrlParams, state: StoreState) => {
    const year = parseValue(up.uYear, 1990);
    const month = parseValue(up.uMonth, 1);
    const day = parseValue(up.uDay, 1);
    return({state: state, year: year, month: month, day: day});
} 

const mapDispatchToProps = (dispatch:Dispatch<any>) => {
    return bindActionCreators(actions, dispatch);
}

export type ContainerProps =
    ReturnType<typeof addParamsToState> &
    ReturnType<typeof mapDispatchToProps>;

const Container: React.FC = () => {
    const urlParams = useParams<IUrlParams>();
    const state = useSelector(mapStateToProps);
    const stateAddParams = addParamsToState(urlParams, state);
    const dispatch = useDispatch();
    const containerProps:ContainerProps = {...stateAddParams, ...mapDispatchToProps(dispatch)};
    return(
        <CalendarForm {...containerProps} />
    );
}

export default Container;