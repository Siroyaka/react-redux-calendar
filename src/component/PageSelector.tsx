import React from 'react';
import {Link} from 'react-router-dom';

interface OwnProps {
    text: string
    link: number
}

type Props = OwnProps;

const links = (n: number) => {
    return '/' + n;
}

const PageSelector: React.FC<Props> = (props) => {
    const {link, text} = props;
    const l = links(link);
    return (
        <Link className='pslink' to={l}>{text}</Link>
    )
}

export default PageSelector;