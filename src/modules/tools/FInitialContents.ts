import { IDaySchedule } from 'modules/interface/ICalendar';

export const GetInitialDaySchedules = (): IDaySchedule[] => {
    const schedule: IDaySchedule[] = [
        {
            daysId: '20200320',
            year: 2020,
            month: 3,
            day: 20,
            schedules: [
                {
                    year: 2020,
                    month: 3,
                    day: 20,
                    time: '20:00:00',
                    title: '3月20日の予定'
                },
                {
                    year: 2020,
                    month: 3,
                    day: 20,
                    time: '20:00:00',
                    title: '3月20日の予定の続き'
                }
            ]
        },
        {
            daysId: '20200314',
            year: 2020,
            month: 3,
            day: 14,
            schedules: [
                {
                    year: 2020,
                    month: 3,
                    day: 14,
                    time: '12:34:55',
                    title: '3月14日の予定'
                },
            ]
        },
        {
            daysId: '20200220',
            year: 2020,
            month: 2,
            day: 20,
            schedules: [
                {
                    year: 2020,
                    month: 2,
                    day: 20,
                    time: '20:00:00',
                    title: '2月20日の予定'
                },
            ]
        },
    ];


    return schedule;
}