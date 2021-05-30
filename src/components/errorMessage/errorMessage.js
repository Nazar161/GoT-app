import React from 'react';
import './errorMessage.css';
import img from './error.jpg';

const ErrorMessage = () => {
    return(
        <>
            <img src={img} alt={'error'}></img>
            <span 
                className="span-style">
                Something goes wrong ---ERROR
            </span>
        </>
    )
}

export default ErrorMessage;