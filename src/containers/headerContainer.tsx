import React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import Header from 'component/header/Header';
import leftDrawerOperations from 'state/LeftDrawer/operations';
import { StoreState } from 'Store';
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

const mapDispatchToProps = (dispatch:Dispatch<any>) => {
    const switchLeftDrawerVisible = bindActionCreators(leftDrawerOperations.switchLeftDrawerVisible, dispatch);
    return {
        switchLeftDrawerVisible
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
        <Header {...containerProps} />
    );
}

export default Container;