import React from 'react';
import { Link } from 'react-router-dom';

import { ArrowBack, ArrowForward } from '@material-ui/icons';

interface OwnProps {
    link: string
}

type Props = OwnProps;

export const NextSelector: React.FC<Props> = ({link}) => {
    return (
        <Link className='pslink' to={link}>
            <ArrowForward />
        </Link>
    )
}

export const PrevSelector: React.FC<Props> = ({link}) => {
    return (
        <Link className='pslink' to={link}>
            <ArrowBack />
        </Link>
    )
}
