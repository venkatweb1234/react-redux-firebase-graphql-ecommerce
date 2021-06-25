import React from 'react';
import './forminput-style.scss';

const FormInput =({handleChange, label, ...otherProps}) =>{
    return(
        <div className="formRow">
            {
                label&&(
                    <label>
                        {label}
                    </label>
                )
            }
            <input className="formInput" onChange={handleChange} {...otherProps} data-test="formRowInput"/>
        </div>
    )
}

export default FormInput;