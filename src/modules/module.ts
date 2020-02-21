import { Action, Reducer } from "redux";
import { MonthData } from '../datainterface/monthinterface';
import monthSchedules from '../data/monthData.json';

// Initial State
export interface AppState {
    readonly schedules: MonthData[];
    readonly viewMonth: number;
}

const initialState: AppState = {
    schedules: monthSchedules.data,
    viewMonth: 2
}

// ActionTypes
enum ActionTypes {
    PAGEMOVE = 'PAGEMOVE',
    RELOAD = 'RELOAD'
}

// ActionCreator

export const pageMove = (num: number) => ({
    type: ActionTypes.PAGEMOVE as ActionTypes.PAGEMOVE,
    num: num
});

export const reload = () => ({
    type: ActionTypes.RELOAD as ActionTypes.RELOAD
});

export type MainActions =
    | ReturnType<typeof pageMove>
    | ReturnType<typeof reload>;

const reducer: Reducer<AppState, MainActions> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case ActionTypes.PAGEMOVE:
            return {...state, viewMonth: state.viewMonth + action.num };
        case ActionTypes.RELOAD:
            return {...state};
        default:
            const _: never = action;
            return state;
    }
};

export default reducer;