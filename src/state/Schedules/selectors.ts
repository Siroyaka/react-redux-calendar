import { State } from './reducers';
import { IDate } from 'modules/interface/ICalendar';
import { createDaysID } from 'modules/tools/FCalendar';

export const getSchedules = (state: State, date: IDate) => {
    const daysId = createDaysID(date);
    return daysId in state ? state[daysId].schedules.length > 0 ? state[daysId].schedules : null : null;
}

export const hasDateInfo = (state: State, date: IDate) => {
    const daysId = createDaysID(date);
    return daysId in state;
}

export default {
    getSchedules,
    hasDateInfo,
}
