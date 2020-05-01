import Types from './types';

export const switchLeftDrawerVisible = (visible: boolean) => ({
    type: Types.SWITCH_LEFT_DRAWER_VISIBLE as Types.SWITCH_LEFT_DRAWER_VISIBLE,
    visible: visible,
});

export const openScheduleRegister = () => ({
    type: Types.CHANGE_SCHEDULE_REGISTER_VISIBLE as Types.CHANGE_SCHEDULE_REGISTER_VISIBLE,
    visible: true,
});

export const closeScheduleRegister = () => ({
    type: Types.CHANGE_SCHEDULE_REGISTER_VISIBLE as Types.CHANGE_SCHEDULE_REGISTER_VISIBLE,
    visible: false,
});

export const openScheduleViewer = () => ({
    type: Types.CHANGE_SCHEDULE_VIEWER_VISIBLE as Types.CHANGE_SCHEDULE_VIEWER_VISIBLE,
    visible: true,
});

export const closeScheduleViewer = () => ({
    type: Types.CHANGE_SCHEDULE_VIEWER_VISIBLE as Types.CHANGE_SCHEDULE_VIEWER_VISIBLE,
    visible: false,
});

export type ActionTypes = 
    ReturnType<typeof switchLeftDrawerVisible> |
    ReturnType<typeof openScheduleRegister> |
    ReturnType<typeof closeScheduleRegister> |
    ReturnType<typeof openScheduleViewer> |
    ReturnType<typeof closeScheduleViewer>

export default {
    switchLeftDrawerVisible,
    openScheduleRegister,
    closeScheduleRegister,
    openScheduleViewer,
    closeScheduleViewer,
}
