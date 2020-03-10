type day = {
    day: number,
    type: "LAST" | "NOW" | "NEXT"
}

class MonthData {
    readonly firstDayIndex: number;
    readonly firstDayWeekDay: number;
    readonly monthDates: day[];
    readonly lastDay: number;

    constructor(year: number, month: number) {
        this.lastDay = new Date(year, month, 0).getDate();
        const beforeMonthLastDay = new Date(year, month - 1, 0).getDate();
        this.firstDayWeekDay = new Date(year, month - 1, 1).getDay();
        this.firstDayIndex = beforeMonthLastDay;
        this.monthDates = Array(beforeMonthLastDay + this.lastDay + 6);

        let i = 0;
        for (i; i < beforeMonthLastDay; i++) {
            this.monthDates[i] = {day:i + 1, type: "LAST"};
        }
        for (let u = 0; u < this.lastDay; u++) {
            this.monthDates[beforeMonthLastDay + u] = {day:u + 1, type: "NOW"};
        }
        for (let u = 0; u < 6; u++) {
            this.monthDates[beforeMonthLastDay + this.lastDay + u] = {day:u + 1, type: "NEXT"};
        }
    }

    firstDay() {
        return this.monthDates[this.firstDayIndex];
    }

    makeCalendar() {
        const d = 35 - (this.firstDayWeekDay + this.lastDay);
        const weekNumber = d > 6 ? 4 : d > -1 ? 5 : 6;
        let calendar: day[][] = Array(weekNumber);
        const startindex = (this.firstDayIndex - this.firstDayWeekDay);
        for (let i = 0; i < calendar.length; i++) {
            let week: day[] = Array(7);
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

