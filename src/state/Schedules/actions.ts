import Types from './types';
import { ISchedule, IDate, IScheduleWithoutId } from 'modules/interface/ICalendar';

export const pushSchedule = (
    schedule: IScheduleWithoutId, date: IDate) => ({
    type: Types.PUSH_SCHEDULE as Types.PUSH_SCHEDULE,
    schedule: schedule,
    date: date,
});

export const deleteSchedule = (schedule: ISchedule, date: IDate) => ({
    type: Types.DELETE_SCHEDULE as Types.DELETE_SCHEDULE,
    schedule: schedule,
    date: date,
});

export const updateSchedule = (schedule: ISchedule, date: IDate) => ({
    type: Types.UPDATE_SCHEDULE as Types.UPDATE_SCHEDULE,
    schedule: schedule,
    date: date,
});

export type ActionType = ReturnType<typeof pushSchedule> | ReturnType<typeof deleteSchedule> | ReturnType<typeof updateSchedule>;

export default {
    pushSchedule,
    deleteSchedule,
    updateSchedule
}