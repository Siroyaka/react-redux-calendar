import React from 'react';

interface OwnProps {

}

type Props = OwnProps;

const Header: React.FC<Props> = (props) => {
    return(
        <h1>header</h1>
    );
}