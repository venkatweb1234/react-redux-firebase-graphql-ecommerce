import React from 'react';
import { shallow } from 'enzyme';
import { findByTestattr } from '../../../_Utils/_common_test_functions';
import Login from './login-component';



const setup = (props = {}) => {
    const compoent = shallow(<Login {...props} />);
    return compoent;
}

describe('Component setup Login values', () => {
    let component;
    beforeEach(() => {
        component = setup();
    })
    it('Should render Login compoent', () => {
        let wrapper = findByTestattr(component, 'LoginComponent');
        expect(wrapper.length).toBe(1);
    })
})