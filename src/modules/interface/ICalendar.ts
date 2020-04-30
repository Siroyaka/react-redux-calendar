export interface IDate {
    year: number,
    month: number,
    day: number
}

export interface IUrlParams {
    uYear: string,
    uMonth: string,
    uDay: string,
}

export type TDaySchedule = { [key: string]: IDateInfo };

export interface IDateInfo {
    year: number,
    month: number,
    day: number,
    nextId: number,
    schedules: ISchedule[],
}

export interface ISchedule {
    id: number,
    time: string,
    title: string,
    place?: string,
    memo?: string,
}

export type IScheduleWithoutId = Omit<ISchedule, "id">;
