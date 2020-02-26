import { Action, createStore } from 'redux';
import MainReducer, { AppState, MainActions } from './modules/module';

const Store = () => {
    return createStore(MainReducer); 
}

export default Store();

export type StoreState = {
    reducer: AppState;
}

export type StoreAction = MainActions | Action;