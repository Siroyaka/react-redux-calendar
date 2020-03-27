import { IDaySchedule } from 'modules/interface/ICalendar';
import { createDaysID } from 'modules/tools/FCalendar';

export const GetInitialDaySchedules = (): IDaySchedule[] => {
    const schedule: IDaySchedule[] = [
        {
            daysId: createDaysID(2020, 3, 20),
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
            daysId: createDaysID(2020, 3, 14),
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
            daysId: createDaysID(2020, 2, 20),
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