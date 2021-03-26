import React from 'react';
import './style.scss';

export default function CardBox({className, padding, children}) {
    if (!padding) padding = '25px'
    return (
        <div className={`${className} card-box-class`} style={{padding}}>
            {children}
        </div>
    );
}
