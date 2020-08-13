import React from 'react';
import './styles.css';

export const Input = ({name,value,type='text',placeholder,onChange}) => {
    return(
        <input 
            className=''
            type ={type} 
            name={name}
            value={value}
            placeholder={placeholder} 
            onChange={onChange} required/>
    )
}

export const TextArea = ({name,value,placeholder,onChange}) => {
    return(
        <textarea  
            className=''
            name={name}
            value={value}
            placeholder={placeholder} 
            onChange={onChange} required>
        </textarea>   
    )
}