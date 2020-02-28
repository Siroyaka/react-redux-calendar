import React from 'react';
import {Link} from 'react-router-dom';
import {ArrowBack, ArrowForward} from '@material-ui/icons';

interface OwnProps {
    link: number
}

type Props = OwnProps;

const links = (n: number) => {
    return '/' + n;
}

export const NextSelector: React.FC<Props> = ({link}) => {
    const l = links(link);
    return (
        <Link className='pslink' to={l}>
            <ArrowForward />
        </Link>
    )
}

export const PrevSelector: React.FC<Props> = ({link}) => {
    const l = links(link);
    return (
        <Link className='pslink' to={l}>
            <ArrowBack />
        </Link>
    )
}
