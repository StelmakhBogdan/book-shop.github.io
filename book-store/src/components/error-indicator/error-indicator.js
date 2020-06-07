import React from 'react';

import './error-indicator.css';
import icon from './icons8-error-64.png';

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <img src={icon} alt="error icon"/>
            <span className="boom">ERROR!</span>
            <span>Something has gone terribly wrong!!!</span>
        </div>
    );
};

export default ErrorIndicator;