import React, { Component } from 'react';
import AuthWrapper from '../AuthWrapper/authwrap-component';
import './emailpass-style.scss';
import { initialEmailPwdState } from '../constants/constants-variables';
import FormInput from '../forms/FormInput/forminput-compoent';
import Buttons from '../forms/Button/button-component';
import { auth } from '../../firebase/_util';
import { withRouter } from 'react-router-dom';

class EmailPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...initialEmailPwdState
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }
    handleSubmit = async e => {
        e.preventDefault();
        try {
            const { email, errors } = this.state;
            const config = {
                url: 'http://localhost:3000/login'
            }
            await auth.sendPasswordResetEmail(email, config).then(() => {
                this.props.history.push('/login')
            }).catch(() => {
                const err = ['Email not found. Please try again.'];
                this.setState({
                    errors: err
                })
            })

        }
        catch (err) {
            console.log(err);
        }
    }
    render() {
        const { email, errors } = this.state;
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
                    <form type="submit" onSubmit={this.handleSubmit} className="submitEventhadle">
                        <FormInput
                            type="email"
                            name="email"
                            value={email}
                            placeholder="Email"
                            onChange={this.handleChange}
                        />

                        <Buttons type="submit">
                            Email Password
                        </Buttons>
                    </form>
                </div>
            </AuthWrapper>
        );
    }
}

export default withRouter(EmailPassword);