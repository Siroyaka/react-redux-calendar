
const firstWeek = (fw: number, d: number) => {
    let l = [];
    for (let i = 0; i < fw; i++) {
        l.push(0);
    }
    for (let i = 0; i < d; i++) {
        l.push(i + 1);
    }
    return l;
}

export const getMonthCalendar = (year: number, month: number) => {

    const monthDays = new Date(year, month, 0).getDate();
    const monthStartWeekDay = new Date(year, month - 1, 1).getDay();

    const firstWeekEndDay = 7 - monthStartWeekDay;
    let t = [];
    t.push(firstWeek(monthStartWeekDay, firstWeekEndDay))

    for (let i = firstWeekEndDay + 1; i < monthDays + 1;) {
        let lst = [];
        const nxWeekDay = i + 7;
        for (i; i < nxWeekDay && i < monthDays + 1; i++) {
            lst.push(i);
        } 
        t.push(lst);
    }
    return t;
}
