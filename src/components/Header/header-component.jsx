import React from 'react';
import './header-style.scss';
import Logo from './../../assets/logo.png';
import { Link } from 'react-router-dom';
const Header = props => {
    return (
        <header className="header" data-test="headerComponent">
            <div className="wrap">
                <div className="logo">
                    <Link to="/">
                        <img data-test="ReactLogo" src={Logo} alt="React Logo" />
                    </Link>
                </div>
                <div className="callToActions">
                    <ul>
                        <li>
                            <Link to="/registration">
                                Register
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
export default Header;