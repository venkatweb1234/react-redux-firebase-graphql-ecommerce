import React, { Component } from 'react';
import Signup from '../../Signup/signup-component';
import './registration-style.scss';

class Registrationabc extends Component{
    render(){
        return(<div data-test="registrationComponent">
            <Signup />
        </div>)
    }
}

export default Registrationabc;