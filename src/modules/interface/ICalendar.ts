export interface IMonthFormat {
    month: number
    days: IDayFormat[][]
}

export interface IDayFormat {
    day: number | null
    schedule: ISchedule[]
}

export interface ISchedule {
    title: string
}