import { State } from './reducers';
import { IDate } from 'modules/interface/ICalendar';
import { createDaysID } from 'modules/tools/FCalendar';

const getDateInfo = (state: State, date: IDate) => {
    const daysId = createDaysID(date);
    return state[daysId];
}

const hasDateInfo = (state: State, date: IDate) => {
    const daysId = createDaysID(date);
    return daysId in state;
}

export default {
    getDateInfo,
    hasDateInfo,
}
