export interface IMonthFormat {
    month: number
    days: IDayFormat[][]
}

export interface IDayFormat {
    day: number | null
    schedules: ISchedule[]
}

export interface ISchedule {
    title: string
}

export interface ICalendarDays {
    year: number,
    month: number,
    day: number
}

export interface IUrlParams {
    year: string | undefined,
    month: string | undefined,
    day: string | undefined,
}

export type TDaySchedule = {[key: string]: IDaySchedule};

export interface IDaySchedule {
    daysId: number,
    year: number,
    month: number,
    day: number,
    schedules: ISchedule[],
}

export interface ISchedule {
    year: number,
    month: number,
    day: number,
    time: string,
    title: string,
    place?: string,
    memo?: string,
}