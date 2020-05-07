import Types from './types';
import { IDate, ISchedule } from 'modules/interface/ICalendar';

export const openScheduleViewer = (date: IDate, schedule: ISchedule) => ({
    type: Types.OPEN_SCHEDULE_VIEWER as Types.OPEN_SCHEDULE_VIEWER,
    date: date,
    schedule: schedule,
});

export const closeScheduleViewer = () => ({
    type: Types.CLOSE_SCHEDULE_VIEWER as Types.CLOSE_SCHEDULE_VIEWER,
});

export type ActionTypes =
    ReturnType<typeof openScheduleViewer> |
    ReturnType<typeof closeScheduleViewer>

export default {
    openScheduleViewer,
    closeScheduleViewer,
}