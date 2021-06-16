import React, { Component } from 'react';
import { initialsignUpState } from '../../components/constants/constants-variables';
import Buttons from '../forms/Button/button-component';
import FormInput from '../forms/FormInput/forminput-compoent';
import './signup-style.scss';
import { auth, handleUserProfile } from '../../firebase/_util';
import AuthWrapper from '../AuthWrapper/authwrap-component';
import { useState } from 'react';
import { withRouter } from 'react-router-dom';


const Signup = (props) => {
    const [displayName, setdisplayName] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');
    const [errors, seterrors] = useState('');

    const resetForm = () => {
        setpassword('');
        setemail('');
        setdisplayName('');
        setconfirmPassword('');
        seterrors('');
    }
    const handleSubmitForm = async e => {
        e.preventDefault();
        if (password !== confirmPassword) {
            const err = ['Password Don\'t Match'];
            seterrors(err);
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await handleUserProfile(user, { displayName });
            resetForm();
            props.history.push('/');
        }
        catch (err) {
            console.log(err);
        }
    }

    const configAuthWrapper = {
        headline: 'Registration'
    }
    return (
        <AuthWrapper {...configAuthWrapper}>
            <div className="formWrap">
                {
                    errors.length > 0 && (
                        <ul>
                            {errors.map((err, index) => {
                                return (
                                    <li key={index}>
                                        {err}
                                    </li>
                                )
                            })}
                        </ul>
                    )
                }
                <form type="submit" onSubmit={handleSubmitForm} data-test="signupDataSubmit">
                    <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        placeholder="Full name"
                        hadleChange={e => setdisplayName(e.target.value)}
                    />

                    <FormInput
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Email"
                        hadleChange={e => setemail(e.target.value)}
                    />

                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Password"
                        hadleChange={e => setpassword(e.target.value)}
                    />

                    <FormInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        placeholder="Confirm Password"
                        hadleChange={e => setconfirmPassword(e.target.value)}
                    />

                    <Buttons type="submit">
                        Register
                    </Buttons>
                </form>
            </div>
        </AuthWrapper>
    );
}


export default withRouter(Signup);