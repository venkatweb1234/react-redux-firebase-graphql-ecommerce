import React from 'react';
import './header-style.scss';
import Logo from './../../assets/logo.png';
const Header = props =>{
    return(
        <header className="header" data-test="headerComponent">
            <div className="wrap">
                <div className="logo">
                    <img data-test="ReactLogo" src={Logo} alt="React Logo" />
                </div>
            </div>
        </header>
    )
}
export default Header;