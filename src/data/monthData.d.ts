import {MonthData} from '../datainterface/monthinterface';
declare module '~/monthData.json' {
    interface d {
        data: MonthData
    }
    const value: d;
    export = value;
}