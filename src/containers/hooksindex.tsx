import React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { StoreState, StoreAction } from '../store';
import { pageMove, reload } from '../modules/module';
import { useSelector, useDispatch } from 'react-redux';
import CalendarForm from '../component/CalendarForm';

const mapStateToProps = (state: StoreState): StoreState => {
    return({...state});
} 

const mapDispatchToProps = (dispatch:Dispatch<StoreAction>) => {
    return bindActionCreators({ pageMove, reload }, dispatch);
}

export type ContainerProps =
    ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatchToProps>;

const Container: React.FC = () => {
    const state = useSelector(mapStateToProps);
    const dispatch = useDispatch();
    const containerProps:ContainerProps = {...state, ...mapDispatchToProps(dispatch)};
    return(
        <CalendarForm {...containerProps} />
    );
}

export default Container;