import { combineReducers, Reducer } from 'redux';
import types from './types';
import { TDaySchedule } from 'modules/interface/ICalendar';
import { GetInitialDaySchedules } from 'modules/tools/FInitialContents';
import { adjustDateInfos, createDaysID } from 'modules/tools/FCalendar';
import { ActionType } from './actions';

export type State = TDaySchedule;

const initialState: State = adjustDateInfos(GetInitialDaySchedules());

const scheduleReducer: Reducer<State, ActionType> = (state = initialState, action) => {
    switch(action.type) {
        case types.PUSH_SCHEDULE:
        {
            let schedule = {
                id: 1,
                time: action.schedule.time,
                title: action.schedule.title,
                memo: action.schedule.memo,
                place: action.schedule.place
            };
            const date = action.date;
            let dateInfos = { ...state };
            const daysId = createDaysID(date);
            if (daysId in dateInfos) {
                schedule.id = dateInfos[daysId].nextId;
                dateInfos[daysId].nextId += 1;
                dateInfos[daysId].schedules.push(schedule);
            } else {
                dateInfos[daysId] = {
                    year: date.year,
                    month: date.month,
                    day: date.day,
                    nextId: 2,
                    schedules: [schedule]
                };
            }
            return dateInfos;
        }
        case types.DELETE_SCHEDULE:
        {
            let date = action.date;
            let daysId = createDaysID(date);
            let dateInfos = { ...state };
            if (daysId in dateInfos) {
                let s = dateInfos[daysId].schedules;
                dateInfos[daysId].schedules = s.filter(x => x.id != action.schedule.id);
            }
            return dateInfos;
        }
        case types.UPDATE_SCHEDULE:
        {
            let date = action.date;
            let daysId = createDaysID(date);
            let dateInfos = { ...state };
            if (daysId in dateInfos) {
                if (dateInfos[daysId].schedules.some(x => x.id == action.schedule.id)) {
                    dateInfos[daysId]
                    .schedules
                    .filter(x => x.id == action.schedule.id)[0] = action.schedule;
                }
            }
            return dateInfos;
        }
        default:
            return state;
    }
}

const reducer = combineReducers(scheduleReducer);

export default scheduleReducer;