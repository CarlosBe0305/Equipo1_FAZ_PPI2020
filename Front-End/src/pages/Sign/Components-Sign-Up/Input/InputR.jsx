import React from 'react';
import './Input.css';

const InputR = ({ attribute, handleChange, param }) => {
    return (
        <div>
            <input 
            id={attribute.id}
            name={attribute.name}
            placeholder={attribute.placeholder}
            type={attribute.type}
            className='regular-style'
            />
        </div>
    )
};

export default InputR;