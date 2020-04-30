import { Store, createStore, combineReducers } from 'redux';
import scheduleReducer from 'state/Schedules';

const reducers = combineReducers(
    scheduleReducer
);

export type StoreState = ReturnType<typeof scheduleReducer>;

const configureStore = (initialState = {}): Store => {
    return createStore(
        reducers,
        initialState
    );
}

const store = configureStore({});

export default store;