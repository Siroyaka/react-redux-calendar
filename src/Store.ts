import { Store, createStore, combineReducers } from 'redux';
import scheduleReducer from 'state/Schedules';
import leftDrawerReducer from 'state/LeftDrawer';
import scheduleRegisterReducer from 'state/ScheduleRegister';
import scheduleViewerReducer from 'state/ScheduleViewer';

const reducers = combineReducers({
    scheduleReducer,
    leftDrawerReducer,
    scheduleRegisterReducer,
    scheduleViewerReducer,
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