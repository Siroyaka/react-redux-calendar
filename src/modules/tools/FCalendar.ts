import { IDate, TDaySchedule, IDateInfo } from 'modules/interface/ICalendar';

class MonthData {
    readonly firstDayIndex: number;
    readonly firstDayWeekDay: number;
    readonly monthDates: IDate[];
    readonly lastDay: number;

    constructor(year: number, month: number) {
        this.lastDay = new Date(year, month, 0).getDate();
        const beforeMonthLastDay = new Date(year, month - 1, 0).getDate();
        this.firstDayWeekDay = new Date(year, month - 1, 1).getDay();
        this.firstDayIndex = beforeMonthLastDay;
        const a = beforeMonthLastDay + this.lastDay + 6;
        this.monthDates = Array(a);
        const lastMonth = month - 1 > 0 ? month - 1 : 12;
        const nextMonth = month + 1 < 13 ? month + 1 : 1;

        let i = 0;
        for (i; i < beforeMonthLastDay; i++) {
            this.monthDates[i] = { year: lastMonth === 12 ? year - 1 : year, month: lastMonth, day:i + 1 };
        }
        for (let u = 0; u < this.lastDay; u++) {
            this.monthDates[beforeMonthLastDay + u] = { year: year, month: month, day: u + 1 };
        }
        for (let u = 0; u < 6; u++) {
            this.monthDates[beforeMonthLastDay + this.lastDay + u] = { year: nextMonth === 1 ? year + 1 : year, month: nextMonth, day: u + 1 };
        }
    }

    firstDay() {
        return this.monthDates[this.firstDayIndex];
    }

    makeCalendar() {
        const d = 35 - (this.firstDayWeekDay + this.lastDay);
        const weekNumber = d > 6 ? 4 : d > -1 ? 5 : 6;
        let calendar: IDate[][] = Array(weekNumber);
        const startindex = (this.firstDayIndex - this.firstDayWeekDay);
        for (let i = 0; i < calendar.length; i++) {
            let week: IDate[] = Array(7);
            for (let k = 0; k < week.length; k++) {
                const index = i * 7 + k + startindex;
                week[k] = this.monthDates[index];
            }
            calendar[i] = week;
        }
        return calendar;
    }

}

export const getMonthCalendar = (year: number, month: number) => {
    const monthData = new MonthData(year, month);
    return monthData.makeCalendar();
}

export const getToday = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    return "/" + year + "/" + month + "/" + day;
}

export const adjustDateInfos = (dateInfos: IDateInfo[]): TDaySchedule => {
    let res: TDaySchedule = {};
    for (let i = 0; i < dateInfos.length; i++) {
        const dateInfo = dateInfos[i];
        const daysId = createDaysID({year: dateInfo.year, month: dateInfo.month, day: dateInfo.day});
        res[daysId] = dateInfo;
    }
    return res;
}

// 日付をもとに一意の数値を作成する(日付を探す際のキーとなる)
export const createDaysID = (date: IDate) => {
    return (date.year * 13 + date.month) * 32 + date.day;
}

// 日付から作成した一意の通知を日付に変換する
export const restoreDaysID = (daysID: number) => {
    const d = daysID % 32;
    const a = (daysID - d) / 32;
    const m = a % 13;
    const y = (a - m) / 13;
    return [y, m, d];
}

export const parseValue = (s: string, d: number) => {
    const n = parseInt(s);
    return isNaN(n) ? d : n;
}
