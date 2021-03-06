import React from 'react';
import './authwrap-style.scss';

const AuthWrapper = ({ headline, children }) => {
    return(<div className="authWrapper" data-test="authWrapperComponent">
            <div className="wrap">
                {headline && <h2>{headline}</h2>}
                <div className="children" data-test="authWrapperchildComponent">
                    {children && children}
                </div>
            </div>
        </div>
    )
}
export default AuthWrapper;