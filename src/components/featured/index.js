import React from 'react';
import Carrousel from './carrousel';
import TimeUntil from './timeUntil';
const Featured = () => {
    return (
        <div style={{position: "relative"}}>
            <Carrousel />
            <div className="artist_name">
                <div className="wrapper">Aina Grande</div>
            </div>
            <TimeUntil />
        </div>
    );
};

export default Featured;