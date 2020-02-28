import React from 'react';
import { useParams } from 'react-router-dom';

interface OwnProps {

}

type Props = OwnProps;

const Header: React.FC<Props> = (props) => {
    const {id} = useParams<{id: string|undefined}>();
    return(
        <h1>{id}月</h1>
    );
}

export default Header;