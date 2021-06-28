import React from "react";
import "./header-style.scss";
import Logo from "./../../assets/logo.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOutUserStart } from "../../redux/User/user.actions";
import { selectCartItemsCount } from "./../../redux/Cart/cart.selecters";

const mapState = (state) => ({
  currentUser: state.user.currentUser,
  totalNumCartItems: selectCartItemsCount(state)
});

const Header = (props) => {
  const dispatch = useDispatch();
  const { currentUser, totalNumCartItems } = useSelector(mapState);
  const signOut = () => {
    dispatch(signOutUserStart());
    console.log("signOutUserStart", signOutUserStart());
  };
  return (
    <header className="header" data-test="headerComponent">
      <div className="wrap">
        <div className="logo">
          <Link to="/">
            <img data-test="ReactLogo" src={Logo} alt="React Logo" />
          </Link>
        </div>
        <nav>
          <ul className="htauto">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
          </ul>
        </nav>
        <div className="callToActions">
          <ul>
            <li className="cartYour">
              <Link to='/cart'>Your Cart ({totalNumCartItems})</Link>
            </li>
            {currentUser && [
              <li className="dashboard">
                <Link to="/dashboard">My Account</Link>
              </li>,
              <li>
                <span className="Logout" onClick={() => signOut()}>
                  Logout
                </span>
              </li>,
            ]}

            {!currentUser && [
              <li>
                <Link to="/registration">Register</Link>
              </li>,
              <li className="loginc">
                <Link to="/login">Login</Link>
              </li>,
            ]}
          </ul>
        </div>
      </div>
    </header>
  );
};
Header.defaultProps = {
  currentUser: null,
};

export default Header;
