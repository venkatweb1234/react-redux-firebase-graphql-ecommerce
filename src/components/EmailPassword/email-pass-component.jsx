import React, { Component } from 'react';
import AuthWrapper from '../AuthWrapper/authwrap-component';
import './emailpass-style.scss';
import { initialEmailPwdState } from '../constants/constants-variables';
import FormInput from '../forms/FormInput/forminput-compoent';
import Buttons from '../forms/Button/button-component';
import { auth } from '../../firebase/_util';
import { withRouter } from 'react-router-dom';
import { useState } from 'react';

const EmailPassword = props => {
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState('');
    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const config = {
                url: 'http://localhost:3000/login'
            }
            await auth.sendPasswordResetEmail(email, config).then(() => {
                props.history.push('/login')
            }).catch(() => {
                const err = ['Email not found. Please try again.'];
                setErrors(err)
            })

        }
        catch (err) {
            console.log(err);
        }
    }
    const configAuthWrapper = {
        headline: 'Email Password'
    }
    return (
        <AuthWrapper {...configAuthWrapper} data-test="EmailPassAuthWrapperCompoentAccess">
            <div className="formWrap">
                {
                    errors.length > 0 && (
                        <ul>
                            {errors.map((e, index) => {
                                return (
                                    <li key={index}>
                                        {e}
                                    </li>
                                )
                            })}
                        </ul>
                    )
                }
                <form type="submit" onSubmit={handleSubmit} className="submitEventhadle">
                    <FormInput
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Email"
                        hadleChange={e => setEmail(e.target.value)}
                    />

                    <Buttons type="submit">
                        Email Password
                    </Buttons>
                </form>
            </div>
        </AuthWrapper>
    );
}


export default withRouter(EmailPassword);