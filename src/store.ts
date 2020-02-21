import { Action } from 'redux';
import { AppState, MainActions } from './modules/module';

export type StoreState = {
    reducer: AppState;
}

export type StoreAction = MainActions | Action;