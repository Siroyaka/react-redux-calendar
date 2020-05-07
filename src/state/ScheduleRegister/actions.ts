import types from './types';
import { IDate } from 'modules/interface/ICalendar'

export const openScheduleRegister = (date: IDate) => ({
    type: types.OPEN_SCHEDULE_REGISTER as types.OPEN_SCHEDULE_REGISTER,
    date: date,
});

export const closeScheduleRegister = () => ({
    type: types.CLOSE_SCHEDULE_REGISTER as types.CLOSE_SCHEDULE_REGISTER,
});

export type ActionTypes =
    ReturnType<typeof openScheduleRegister> |
    ReturnType<typeof closeScheduleRegister>

export default {
    openScheduleRegister,
    closeScheduleRegister,
}