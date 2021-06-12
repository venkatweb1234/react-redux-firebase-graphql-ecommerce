import React from 'react';
import './header-style.scss';
import Logo from './../../assets/logo.png';
import { Link } from 'react-router-dom';
import {auth} from './../../firebase/_util';
const Header = props => {
    const { currentUser } = props;
    return (
        <header className="header" data-test="headerComponent">
            <div className="wrap">
                <div className="logo">
                    <Link to="/">
                        <img data-test="ReactLogo" src={Logo} alt="React Logo" />
                    </Link>
                </div>
                <div className="callToActions">
                    {currentUser && (
                        <ul>
                            <li>
                                <span className="Logout" onClick={() =>auth.signOut()}>Logout</span>
                            </li>
                        </ul>
                    )}
                    {!currentUser && (
                        <ul>
                            <li>
                                <Link to="/registration">
                                    Register
                            </Link>
                            </li>
                            <li className="loginc">
                                <Link to="/login">
                                    Login
                            </Link>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </header>
    )
}
Header.defaultProps = {
    currentUser: null
}
export default Header;