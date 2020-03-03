import { Action, createStore } from 'redux';
import MainReducer, { AppState, MainActions } from 'modules/Module';

const Store = createStore(MainReducer); 

export default Store;

export type StoreState = AppState;

export type StoreAction = MainActions | Action;