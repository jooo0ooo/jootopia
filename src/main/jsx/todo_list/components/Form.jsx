import React from 'react';
import './../../../webapp/resources/css/todo/Form.css';

const Form = ({value, onChange, onCreate, onKeyPress, color}) => {
    return (
        <div className="form">
            <input
                value={value}
                onChange={onChange}
                onKeyPress={onKeyPress}
                style={{color}}
            />
            <div className="create-button" onClick={onCreate}>
                add
            </div>
        </div>
    );
};

export default Form;