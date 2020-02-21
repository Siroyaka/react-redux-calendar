import { Action } from "redux";

// InitialState

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

