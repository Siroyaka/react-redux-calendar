import { Reducer } from 'redux';

import types from './types';
import { ActionTypes } from './actions';
import { IDate } from 'modules/interface/ICalendar';

interface IState {
    visible: boolean,
    date: IDate,
}

export type State = Readonly<IState>;

const initialState: State = ({
    visible: false,
    date: {year: 2000, month: 1, day: 1},
});

const reducer: Reducer<State, ActionTypes> = (state = initialState, action) => {
    switch(action.type) {
        case types.OPEN_SCHEDULE_REGISTER: {
            return {
                ...state,
                visible: true,
                date: action.date,
            }
        }
        case types.CLOSE_SCHEDULE_REGISTER: {
            return {
                ...state,
                visible: false,
            }
        }
        default: {
            return state;
        }
    }
}

export default reducer;