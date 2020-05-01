import { Store, createStore, combineReducers } from 'redux';
import scheduleReducer from 'state/Schedules';
import formControlerReducer from 'state/FormControler';

const reducers = combineReducers({
    scheduleReducer,
    formControlerReducer
});

export type StoreState = 
    ReturnType<typeof reducers>

const configureStore = (initialState = {}): Store => {
    return createStore(
        reducers,
        initialState
    );
}

const store = configureStore({});

export default store;