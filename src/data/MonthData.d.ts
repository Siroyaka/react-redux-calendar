import { IMonthFormat } from 'modules/interface/ICalendar';
declare module '~/MonthData.json' {
    interface d {
        data: MonthData
    }
    const value: d;
    export = value;
}