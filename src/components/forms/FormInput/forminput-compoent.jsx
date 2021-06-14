import React from 'react';
import './forminput-style.scss';

const FormInput =({hadleChange, label, ...otherProps}) =>{
    return(
        <div className="formRow">
            {
                label&&(
                    <label>
                        {label}
                    </label>
                )
            }
            <input className="formInput" onChange={hadleChange} {...otherProps} data-test="formRowInput"/>
        </div>
    )
}

export default FormInput;