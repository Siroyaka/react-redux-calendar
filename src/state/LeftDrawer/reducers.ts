import { Reducer } from 'redux';

import Types from './types';
import { ActionTypes } from './actions';

interface IState {
    visible: boolean,
}

export type State = Readonly<IState>;

const initialState: State = ({
    visible: false,
});

const reducer: Reducer<State, ActionTypes> = (state = initialState, action) => {
    switch(action.type) {
        case Types.SWITCH_LEFT_DRAWER_VISIBLE: {
            return{...state, leftDrawerVisible: !action.visible};
        }
        default: {
            return state;
        }
    }
}

export default reducer;