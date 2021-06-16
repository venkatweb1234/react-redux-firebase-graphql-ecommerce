import React, { useState, useEffect } from 'react';
import AuthWrapper from '../AuthWrapper/authwrap-component';
import './emailpass-style.scss';
import FormInput from '../forms/FormInput/forminput-compoent';
import Buttons from '../forms/Button/button-component';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword } from '../../redux/User/user.actions';

const mapState = ({ user }) => ({
    resetPasswordSucess: user.resetPasswordSucess,
    resetPasswordError:user.resetPasswordError
})
const EmailPassword = props => {
    const dispatch = useDispatch();
    const { resetPasswordSucess, resetPasswordError } = useSelector(mapState);
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState('');
    useEffect(() => {
        if (resetPasswordSucess) {
            props.history.push('/login');
        }
    },[resetPasswordSucess]);
    useEffect(() => {
        if (resetPasswordError.length >0 && Array.isArray(resetPasswordError)) {
            setErrors(resetPasswordError);
        }
    },[resetPasswordError])
    const handleSubmit = async e => {
        e.preventDefault();
        dispatch(resetPassword({ email }));
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