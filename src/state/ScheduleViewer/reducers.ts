import { Reducer } from 'redux';

import Types from './types';
import { ActionTypes } from './actions';
import { IDate, ISchedule } from 'modules/interface/ICalendar';

interface IState {
    visible: boolean,
    date: IDate,
    schedule: ISchedule,
}

export type State = Readonly<IState>;

const initialState: State = {
    visible: false,
    date: {year: 2000, month: 1, day: 1},
    schedule: {id: 0, time: "", title: ""},
}

export const reducer: Reducer<State, ActionTypes> = (state = initialState, action) => {
    switch(action.type) {
        case Types.OPEN_SCHEDULE_VIEWER: {
            return {
                ...state,
                visible: true,
                date: action.date,
                schedule: action.schedule,
            }
        }
        case Types.CLOSE_SCHEDULE_VIEWER: {
            return {
                ...state,
                visible: false
            }
        }
        default: {
            return state;
        }
    }
}

export default reducer;