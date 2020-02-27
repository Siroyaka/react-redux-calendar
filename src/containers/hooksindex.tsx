import React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { StoreState, StoreAction } from '../store';
import { pageMove, reload } from '../modules/module';
import { useSelector, useDispatch } from 'react-redux';
import CalendarForm from '../component/CalendarForm';

const mapStateToProps = (): StoreState => {
    const stateSelector = (state:StoreState) => state;
    const state = useSelector(stateSelector);
    return({...state});
} 

const mapDispatchToProps = () => {
    const udsp = useDispatch<Dispatch<StoreAction>>();
    return bindActionCreators({ pageMove, reload }, udsp);
}

export type ContainerProps =
    ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatchToProps>;

const Container: React.FC = () => {
    const state = mapStateToProps();
    const dispatch = mapDispatchToProps();
    const containerProps:ContainerProps = {...state, ...dispatch};
    return(
        <CalendarForm {...containerProps} />
    );
}

export default Container;