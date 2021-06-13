import React, { Component } from 'react';
import { initialsignUpState } from '../../components/constants/constants-variables';
import Buttons from '../forms/Button/button-component';
import FormInput from '../forms/FormInput/forminput-compoent';
import './signup-style.scss';
import { auth, handleUserProfile } from '../../firebase/_util';
class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...initialsignUpState
        }
        this.hadleChange = this.hadleChange.bind(this);
    }
    hadleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }
    handleSubmitForm = async e => {
        e.preventDefault();
        const { displayName, email, password, confirmPassword, errors } = this.state;
        if (password !== confirmPassword) {
            const err = ['Password Don\'t Match'];
            this.setState({
                errors: err
            })
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await handleUserProfile(user, { displayName });
            this.setState({
                ...initialsignUpState
            })
        }
        catch (err) {
            console.log(err);
        }
    }
    render() {
        const { displayName, email, password, confirmPassword, errors } = this.state;
        return (
            <div className="signup">
                <div className="wrap">
                    <h2>Sign Up</h2>
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
                    <div className="formWrap">
                        <form type="submit" onSubmit={this.handleSubmitForm} data-test="signupDataSubmit">
                            <FormInput
                                type="text"
                                name="displayName"
                                value={displayName}
                                placeholder="Full name"
                                onChange={this.hadleChange}
                            />

                            <FormInput
                                type="email"
                                name="email"
                                value={email}
                                placeholder="Email"
                                onChange={this.hadleChange}
                            />

                            <FormInput
                                type="password"
                                name="password"
                                value={password}
                                placeholder="Password"
                                onChange={this.hadleChange}
                            />

                            <FormInput
                                type="password"
                                name="confirmPassword"
                                value={confirmPassword}
                                placeholder="Confirm Password"
                                onChange={this.hadleChange}
                            />

                            <Buttons type="submit">
                                Register
                        </Buttons>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Signup;