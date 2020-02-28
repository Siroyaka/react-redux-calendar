import React from 'react';
import { useParams } from 'react-router-dom';

import { NextSelector, PrevSelector } from 'component/pub/PageSelector';

interface OwnProps {

}

type Props = OwnProps;

const Header: React.FC<Props> = (props) => {
    const {id} = useParams<{id: string|undefined}>();
    const m = parseInt(id);
    return(
        <div>
            <h1>{id}月</h1>
            <PrevSelector link={m-1} />
            <NextSelector link={m+1} />
        </div>
    );
}

export default Header;