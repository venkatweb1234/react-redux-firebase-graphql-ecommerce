import React, { Component } from 'react';
import Buttons from '../forms/Button/button-component';
import './signin-style.scss';
import { auth, signInWithGoogle } from './../../firebase/_util';
import { initialSigninState } from '../constants/constants-variables';
import FormInput from '../forms/FormInput/forminput-compoent';
class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...initialSigninState
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
        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                ...initialSigninState
            });
        }
        catch (err) {
            console.log(err);
        }
    }
    render() {
        const { email, password } = this.state;
        return (<div className="signin">
            <div className="wrap">
                <h2>LogIn</h2>
                <div className="formWrap">
                    <form type="submit" onSubmit={this.handleSubmit} data-test="submitEventhadle">
                        <FormInput
                            type="email"
                            name="email"
                            value={email}
                            placeholder="Email"
                            onChange={this.handleChange}
                        />
                        <FormInput
                            type="password"
                            name="password"
                            value={password}
                            placeholder="Password"
                            onChange={this.handleChange}
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
                    </form>
                </div>
            </div>
        </div>)
    }
}
export default SignIn;