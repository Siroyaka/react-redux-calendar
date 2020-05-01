import Types from './types';

export const switchLeftDrawerVisible = (visible: boolean) => ({
    type: Types.LEFT_DRAWER_VISIBLE as Types.LEFT_DRAWER_VISIBLE,
    visible: visible,
});

export const openScheduleRegister = () => ({
    type: Types.SCHEDULE_REGISTER_VISIBLE as Types.SCHEDULE_REGISTER_VISIBLE,
    visible: true,
});

export const closeScheduleRegister = () => ({
    type: Types.SCHEDULE_REGISTER_VISIBLE as Types.SCHEDULE_REGISTER_VISIBLE,
    visible: false,
});

export const openScheduleViewer = () => ({
    type: Types.SCHEDULE_VIEWER_VISIBLE as Types.SCHEDULE_VIEWER_VISIBLE,
    visible: true,
});

export const closeScheduleViewer = () => ({
    type: Types.SCHEDULE_VIEWER_VISIBLE as Types.SCHEDULE_VIEWER_VISIBLE,
    visible: false,
});

export default {
    switchLeftDrawerVisible,
    openScheduleRegister,
    closeScheduleRegister,
    openScheduleViewer,
    closeScheduleViewer,
}
