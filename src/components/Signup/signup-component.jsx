import React, { useEffect, useState } from 'react';
import Buttons from '../forms/Button/button-component';
import FormInput from '../forms/FormInput/forminput-compoent';
import './signup-style.scss';
import AuthWrapper from '../AuthWrapper/authwrap-component';
import { withRouter } from 'react-router-dom';
import { signUpUser, resetAllForms } from '../../redux/User/user.actions';
import { useDispatch, useSelector } from 'react-redux';

const mapState = ({ user }) => ({
    signUpSuccess: user.signUpSuccess,
    signUpError: user.signUpError
})
const Signup = (props) => {
    const {signUpSuccess, signUpError} = useSelector(mapState);
    const dispatch = useDispatch();
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
    useEffect(() => {
        if (signUpSuccess) {
            resetForm();
            dispatch(resetAllForms());
            props.history.push('/');
        }
    },[signUpSuccess])
    useEffect(() => {
        if (signUpError.length >0 && Array.isArray(signUpError)) {
          seterrors(signUpError);
        }
    },[signUpError])
    const handleSubmitForm = e => {
        e.preventDefault();
        dispatch(signUpUser({
            displayName,
            email,
            password,
            confirmPassword,
            errors
        }))
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