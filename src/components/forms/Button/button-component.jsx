import React from 'react';
import  './button-style.scss';

const Buttons =({children, ...otherProps}) =>{
    return(<button data-test="btnComponent" className="btn" {...otherProps}>
        {children}
    </button>)
}

export default Buttons;