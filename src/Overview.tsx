import React from 'react';

import Header from 'component/header/Header';
import LeftContainer from 'containers/LeftContainer';
import RightContainer from 'containers/RightContainer';
import './Overview.css';

const Overview : React.FC = () => {
    return(
        <React.Fragment>
            <header>
                <Header />
            </header>
            <div className='body-items'>
                <div className='left-container'>
                    <LeftContainer />
                </div>
                <div className='right-container'>
                    <RightContainer />
                </div>
            </div>
        </React.Fragment>
    );
}

export default Overview;
