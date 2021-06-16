import React, { Component } from 'react';
import Buttons from '../forms/Button/button-component';
import './signin-style.scss';
import { auth, signInWithGoogle } from './../../firebase/_util';
import { initialSigninState } from '../constants/constants-variables';
import FormInput from '../forms/FormInput/forminput-compoent';
import AuthWrapper from '../AuthWrapper/authwrap-component';
import { Link, withRouter } from 'react-router-dom';
import { useState } from 'react';

const SignIn = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const resetForm = () => {
        setPassword('');
        setEmail('');
    }
    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await auth.signInWithEmailAndPassword(email, password);
            resetForm();
            props.history.push('/');
        }
        catch (err) {
            console.log(err);
        }
    }
    const configWrapper = {
        headline: 'LogIn'
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
                            <Buttons onClick={signInWithGoogle} data-test="siginwithGoogleComponent">
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

export default withRouter(SignIn);