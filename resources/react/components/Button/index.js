import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

export const Button = ({text, type, clase, onClick}) => {
    return (
        <button type={type} className={`${clase} alignc justifyc`} onClick={onClick}>
            {text === 'HOME' ?  <Link to="/home">{text}</Link> : text}
        </button>
    );
}

export const ButtonLink = ({text,type, clase, onClick}) => {
    return (
        <button type={type} className={`${clase} alignc justifyc`} onClick={onClick}>
            {
                <Link to="/">{text}</Link>
            }
        </button>
    )
}