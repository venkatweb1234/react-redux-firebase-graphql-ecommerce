import React from 'react';
import './header-style.scss';
import Logo from './../../assets/logo.png';
import { Link } from 'react-router-dom';
import { auth } from './../../firebase/_util';
import { connect } from 'react-redux';


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
                            <li className="dashboard">
                                <Link to="/dashboard">
                                    My Account
                                </Link>
                            </li>
                            <li>
                                <span className="Logout" onClick={() => auth.signOut()}>Logout</span>
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

const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser
})
export default connect(mapStateToProps)(Header);