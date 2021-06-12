import React, { Component } from 'react';
import Buttons from '../forms/Button/button-component';
import './signin-style.scss';
import { signInWithGoogle } from './../../firebase/_util';
class SignIn extends Component {
    handleSubmit = async e => {
        e.preventDefault();
    }
    render() {
        return (<div className="signin">
            <div className="wrap">
                <h2>LogIn</h2>
                <div className="formWrap">
                    <form type="submit" onSubmit={this.handleSubmit} data-test="submitEventhadle">
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