import React, { useEffect, useState } from 'react';
import Buttons from '../forms/Button/button-component';
import FormInput from '../forms/FormInput/forminput-compoent';
import './signup-style.scss';
import AuthWrapper from '../AuthWrapper/authwrap-component';
import { useHistory } from 'react-router-dom';
import { signUpUserStart, resetAllForms } from '../../redux/User/user.actions';
import { useDispatch, useSelector } from 'react-redux';

const mapState = ({ user }) => ({
    currentUser: user.currentUser,
    userErr: user.userErr
})
const Signup = (props) => {
    const { currentUser, userErr } = useSelector(mapState);
    const dispatch = useDispatch();
    const history = useHistory();
    const [displayName, setdisplayName] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');
    const [errors, seterrors] = useState([]);

    const resetForm = () => {
        setpassword('');
        setemail('');
        setdisplayName('');
        setconfirmPassword('');
        seterrors('');
    }
    useEffect(() => {
        if (currentUser) {
            resetForm();
            //dispatch(resetAllForms());
            history.push('/');
        }
    }, [currentUser])
    useEffect(() => {
        if (Array.isArray(userErr) && userErr.length > 0) {
            seterrors(userErr);
        }
    }, [userErr])
    const handleSubmitForm = e => {
        e.preventDefault();
        dispatch(signUpUserStart({
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
                        handleChange={e => setdisplayName(e.target.value)}
                    />

                    <FormInput
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Email"
                        handleChange={e => setemail(e.target.value)}
                    />

                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Password"
                        handleChange={e => setpassword(e.target.value)}
                    />

                    <FormInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        placeholder="Confirm Password"
                        handleChange={e => setconfirmPassword(e.target.value)}
                    />

                    <Buttons type="submit">
                        Register
                    </Buttons>
                </form>
            </div>
        </AuthWrapper>
    );
}


export default Signup;