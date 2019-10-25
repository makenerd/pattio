import React from 'react';
import './Options.scss';
import uuid from 'uuid/v4';


function Options(props) {
    const {title, options, setOption} = props;

    return (
        <div className='Options__container'>
            <p>{title}</p>
            <ul className='Options'>
            {options.map(option => 
                <li key={uuid()}>
                    <input type="radio" name={title} value ={option} onClick={() => setOption(option)}/>
                    <label htmlFor={title}>{option}</label>
                </li>
            )}
            </ul>
        </div>
    )
}

export default Options;