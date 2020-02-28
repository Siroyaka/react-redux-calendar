import { IMonthFormat } from 'modules/interface/ICalendar';
declare module '~/monthData.json' {
    interface d {
        data: MonthData
    }
    const value: d;
    export = value;
}