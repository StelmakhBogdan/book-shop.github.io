import React from 'react';

import './spinner.css';

const Spinner = () => {
    return (
        <div className="roller-center">
            <div className="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
};

export default Spinner;