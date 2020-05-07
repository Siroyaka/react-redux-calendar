import Types from './types';

export const switchLeftDrawerVisible = (visible: boolean) => ({
    type: Types.SWITCH_LEFT_DRAWER_VISIBLE as Types.SWITCH_LEFT_DRAWER_VISIBLE,
    visible: visible,
});

export type ActionTypes = 
    ReturnType<typeof switchLeftDrawerVisible>;

export default {
    switchLeftDrawerVisible
}
