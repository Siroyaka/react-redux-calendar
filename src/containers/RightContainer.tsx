import React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { useSelector, useDispatch, MapStateToProps } from 'react-redux';
import { useParams } from 'react-router-dom';

import CalendarForm from 'component/page/RightPage';
import { StoreState } from 'Store';
import scheduleOperations from 'state/Schedules/operations';
import scheduleRegisterOperations from 'state/ScheduleRegister/operations';
import scheduleViewerOperations from 'state/ScheduleViewer/operations';
import { IUrlParams } from 'modules/interface/ICalendar';

const parseValue = (s: string, d: number) => {
    const n = parseInt(s);
    return isNaN(n) ? d : n;
}

const mapStateToProps = (state: StoreState) => {
    return {
        stateSchedules: state.scheduleReducer,
        scheduleRegisterState: state.scheduleRegisterReducer,
        scheduleViewerState: state.scheduleViewerReducer,
        leftDrawerVisible: state.leftDrawerReducer.visible,
    };
}

const addParamsToState = (up: IUrlParams, state: ReturnType<typeof mapStateToProps>) => {
    const year = parseValue(up.uYear, 1990);
    const month = parseValue(up.uMonth, 1);
    const day = parseValue(up.uDay, 1);
    return({...state, year: year, month: month, day: day});
} 

const mapDispatchToProps = (dispatch:Dispatch<any>) => {
    const scheduleActions = bindActionCreators(scheduleOperations, dispatch);
    const scheduleRegisterActions = bindActionCreators(scheduleRegisterOperations, dispatch);
    const scheduleViewerActions = bindActionCreators(scheduleViewerOperations, dispatch);
    return {
        ...scheduleActions,
        ...scheduleRegisterActions,
        ...scheduleViewerActions,
    };
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