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
            <input className="formInput" onChange={hadleChange} {...otherProps} />
        </div>
    )
}

export default FormInput;