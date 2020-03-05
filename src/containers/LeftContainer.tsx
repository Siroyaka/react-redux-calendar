import React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import LeftComponent from 'component/lefts/LeftComponent';
import { StoreState, StoreAction } from 'Store';

const MapStateToProps = (state: StoreState) => {
    return {}
}

const LeftContainer : React.FC = () => {
    return(
        <LeftComponent />
    );
}

export default LeftContainer;