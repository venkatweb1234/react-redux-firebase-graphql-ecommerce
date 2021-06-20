import React, { useState } from 'react';
import Buttons from '../forms/Button/button-component';
import './signin-style.scss';
import { emailSignInStart, googleSignInStart } from './../../redux/User/user.actions';
import FormInput from '../forms/FormInput/forminput-compoent';
import AuthWrapper from '../AuthWrapper/authwrap-component';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const mapState = ({ user }) => ({
    currentUser: user.currentUser
})

const SignIn = (props) => {
    const { currentUser } = useSelector(mapState);
    const dispatch = useDispatch();
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    useEffect(() => {
        if (currentUser) {
            resetForm();
            history.push('/');
        }
    },[currentUser])
    const resetForm = () => {
        setPassword('');
        setEmail('');
    }
    const handleSubmit = async e => {
        e.preventDefault();
        dispatch(emailSignInStart({ email, password }))
    }
    const configWrapper = {
        headline: 'LogIn'
    }
    const handleGoogleSignIn =() =>{
        dispatch(googleSignInStart());
    }
    return (
        <AuthWrapper {...configWrapper}>
            <div className="formWrap">
                <form type="submit" onSubmit={handleSubmit} data-test="submitEventhadle">
                    <FormInput
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Email"
                        hadleChange={e => setEmail(e.target.value)}
                    />
                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Password"
                        hadleChange={e => setPassword(e.target.value)}
                    />
                    <Buttons type="submit">
                        LogIn
                    </Buttons>
                    <div className="socialSignin">
                        <div className="row" data-test="signInGoogleFirebase">
                            <Buttons onClick={handleGoogleSignIn} data-test="siginwithGoogleComponent">
                                Sign in with Google
                            </Buttons>
                        </div>
                    </div>
                    <div className="links">
                        <Link to="/recovery">
                            Reset Password
                        </Link>
                    </div>
                </form>
            </div>
        </AuthWrapper>
    )
}

export default SignIn;