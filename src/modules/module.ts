import { Reducer } from "redux";
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
export enum ActionTypes {
    PAGEMOVE = 'PAGEMOVE',
    RELOAD = 'RELOAD'
}

// ActionCreator
// 何を引数にしたときにどのアクションを生成するかを定義している

export const pageMove = (num: number) => ({
    type: ActionTypes.PAGEMOVE as ActionTypes.PAGEMOVE,
    num: num
});

export const reload = () => ({
    type: ActionTypes.RELOAD as ActionTypes.RELOAD
});

// Action
// MainActionの型はpageMoveの戻り値の型かreloadの戻り値の型であることを示す
export type MainActions =
    | ReturnType<typeof pageMove>
    | ReturnType<typeof reload>;

// ↑本来はActionの定義(actiontypeとpayloadを持っている型)とActionを生成するActionCreatorを
// 両方定義する必要があるが、この書き方だとActionCreatorからActionの定義を作成することができる


// Reducer
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
            // eslint-disable-next-line
            const _: never = action;
            return state;
    }
};

export default reducer;