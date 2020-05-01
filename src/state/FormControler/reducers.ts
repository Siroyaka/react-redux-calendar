import { combineReducers, Reducer } from 'redux';

import Types from './types';
import { ActionTypes } from './actions';

const initialState = ({
    leftDrawerVisible: false,
    scheduleRegisterVisible: false,
    scheduleViewerVisible: false,
});

export type State = Readonly<typeof initialState>;

const reducer: Reducer<State, ActionTypes> = (state = initialState, action) => {
    switch(action.type) {
        case Types.SWITCH_LEFT_DRAWER_VISIBLE: {
            return{...state, leftDrawerVisible: !action.visible};
        }
        case Types.CHANGE_SCHEDULE_REGISTER_VISIBLE: {
            return{...state, scheduleRegisterVisible: action.visible};
        }
        case Types.CHANGE_SCHEDULE_VIEWER_VISIBLE: {
            return{...state, scheduleViewerVisible: action.visible};
        }
        default: {
            return state;
        }
    }
}

export default reducer;