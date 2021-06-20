import React from 'react';
import './header-style.scss';
import Logo from './../../assets/logo.png';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signOutUserStart } from '../../redux/User/user.actions';

const mapState = ({ user }) => ({
    currentUser: user.currentUser
})
const Header = props => {
    const dispatch = useDispatch();
    const { currentUser } = useSelector(mapState);
    const signOut = () =>{
        dispatch(signOutUserStart());
        console.log('signOutUserStart',signOutUserStart());
    }
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
                                <span className="Logout" onClick={() => signOut()}>Logout</span>
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