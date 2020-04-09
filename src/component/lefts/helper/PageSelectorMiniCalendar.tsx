import React from 'react';

import { NavigateBefore, NavigateNext } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';

interface OwnProps {
    year: number,
    month: number,
    onClick: (y: number, m: number) => void
}

type Props = OwnProps;

const getMonth = (y: number, m: number): {py: number, pm: number, ny: number, nm: number} => {
    const pm = m === 1 ? 12 : m - 1;
    const nm = m % 12 + 1;
    const py = pm === 12 ? y - 1 : y;
    const ny = nm === 1 ? y + 1 : y;
    return {py: py, pm: pm, ny: ny, nm: nm};
}

const PageSelectors: React.FC<Props> = (props) => {
    const { year, month, onClick } = props;
    const { py, pm, ny, nm } = getMonth(year, month);
    const PrevButton = () => (
        <IconButton size='small' onClick={() => onClick(py, pm)}>
            <NavigateBefore />
        </IconButton>
    );
    const NextButton = () => (
        <IconButton size='small' onClick={() => onClick(ny, nm)}>
            <NavigateNext />
        </IconButton>
    );
    return (
        <React.Fragment>
            <PrevButton />
            <NextButton />
        </React.Fragment>
    );
}

export default PageSelectors;