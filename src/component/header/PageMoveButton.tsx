import React from 'react';

interface OwnProps {
    onClick?: () => void,
    children: React.ReactChild
}

const PageMoveButton: React.FC<Readonly<OwnProps>> = ({onClick, children}) => (
    <button onClick={onClick}>
        {children}
    </button>
);

export default PageMoveButton;