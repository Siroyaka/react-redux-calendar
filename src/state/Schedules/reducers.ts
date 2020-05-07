import { Reducer } from 'redux';
import types from './types';
import { GetInitialDaySchedules } from 'modules/tools/FInitialContents';
import { adjustDateInfos, createDaysID } from 'modules/tools/FCalendar';
import { ActionTypes } from './actions';

export type State = typeof initialState;

const initialState = adjustDateInfos(GetInitialDaySchedules());

const scheduleReducer: Reducer<State, ActionTypes> = (state = initialState, action) => {
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
                dateInfos[daysId].schedules = s.filter(x => x.id !== action.schedule.id);
            }
            return dateInfos;
        }
        case types.UPDATE_SCHEDULE:
        {
            let date = action.date;
            let daysId = createDaysID(date);
            let dateInfos = { ...state };
            if (daysId in dateInfos) {
                if (dateInfos[daysId].schedules.some(x => x.id === action.schedule.id)) {
                    const index = dateInfos[daysId].schedules.findIndex(x => x.id === action.schedule.id);
                    dateInfos[daysId].schedules[index] = action.schedule;
                }
            }
            return dateInfos;
        }
        default:
            return state;
    }
}

export default scheduleReducer;