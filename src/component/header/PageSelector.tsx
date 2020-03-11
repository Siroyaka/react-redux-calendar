import React from 'react';

import { NextSelector, PrevSelector } from 'component/pub/PageSelector';

export enum SelectorMode {
    YEAR,
    MONTH,
    DAY,
}

interface OwnProps {
    year: number,
    month: number,
    day: number,
    mode: SelectorMode
}

type Props = OwnProps;

const makeLink = (year:number, month: number, day: number) => '/' + year + '/' + month + '/' + day;

const makeLinkMode = (year: number, month: number, day: number, mode: SelectorMode) => {
    const prevYear = year - 1;
    const nextYear = year + 1;
    const prevMonth = month === 1 ? 12 : month - 1;
    const nextMonth = month % 12 + 1;
    // const prevDay = day - 1;
    // const nextDay = day + 1;
    let prevLink = "";
    let nextLink = "";
    switch(mode) {
        case SelectorMode.YEAR:
            prevLink = makeLink(prevYear, month, day);
            nextLink = makeLink(nextYear, month, day);
            break;
        case SelectorMode.MONTH:
            prevLink = makeLink(prevMonth === 12 ? prevYear : year, prevMonth, day);
            nextLink = makeLink(nextMonth === 1 ? nextYear : year, nextMonth, day);
            break;
        case SelectorMode.DAY:
            // 未実装
            prevLink = makeLink(year, month, day);
            nextLink = makeLink(year, month, day);
            break;
        default:
            break;
    }

    return (
        <React.Fragment>
            <PrevSelector link={prevLink} />
            <NextSelector link={nextLink} />
        </React.Fragment>
    )
}

const PageSelectors: React.FC<Props> = (props) => {
    const {year, month, day, mode} = props;
    return makeLinkMode(year, month, day, mode);
}

export default PageSelectors;