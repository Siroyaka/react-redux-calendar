import { IDateInfo } from 'modules/interface/ICalendar';

export const GetInitialDaySchedules = (): IDateInfo[] => {
    const schedule: IDateInfo[] =
    [
        {
            year: 2020,
            month: 3,
            day: 20,
            nextId: 3,
            schedules: [
                {
                    id: 1,
                    time: '20:00:00',
                    title: '3月20日の予定'
                },
                {
                    id: 2,
                    time: '20:00:00',
                    title: '3月20日の予定の続き'
                }
            ]
        },
        {
            year: 2020,
            month: 3,
            day: 14,
            nextId: 2,
            schedules: [
                {
                    id: 1,
                    time: '12:34:55',
                    title: '3月14日の予定'
                },
            ]
        },
        {
            year: 2020,
            month: 2,
            day: 20,
            nextId: 2,
            schedules: [
                {
                    id: 1,
                    time: '20:00:00',
                    title: '2月20日の予定'
                },
            ]
        },
    ];

    return schedule;
}