import React, { useState, useEffect } from 'react';
import AuthWrapper from '../AuthWrapper/authwrap-component';
import './emailpass-style.scss';
import FormInput from '../forms/FormInput/forminput-compoent';
import Buttons from '../forms/Button/button-component';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { resetPasswordStart, resetUserState } from '../../redux/User/user.actions';

const mapState = ({ user }) => ({
    resetPasswordSuccess: user.resetPasswordSuccess,
    userErr: user.userErr
})
const EmailPassword = props => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { resetPasswordSuccess, userErr } = useSelector(mapState);
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState([]);
    useEffect(() => {
        if (resetPasswordSuccess) {
            dispatch(resetUserState());
            history.push('/login');
        }
    }, [resetPasswordSuccess]);
    useEffect(() => {
        if (Array.isArray(userErr) && userErr.length > 0) {
            setErrors(userErr);
        }
    }, [userErr])
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(resetPasswordStart({ email }));
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
                        handleChange={e => setEmail(e.target.value)}
                    />

                    <Buttons type="submit">
                        Email Password
                    </Buttons>
                </form>
            </div>
        </AuthWrapper>
    );
}


export default EmailPassword;