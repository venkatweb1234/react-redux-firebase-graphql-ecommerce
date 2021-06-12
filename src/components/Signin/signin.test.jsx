import React from 'react';
import { shallow, mount } from 'enzyme';
import { findByTestattr } from '../../_Utils/_common_test_functions';
import SignIn from './signin-compoent';
import { spy } from 'sinon';


const setup = (props = {}) => {
    const compoent = shallow(<SignIn {...props} />);
    return compoent;
}

describe('Component setup signin values', () => {
    let component;
    beforeEach(() => {
        component = setup();
    })
    it('Should render google signup compoent', () => {
        let wrapper = findByTestattr(component, 'siginwithGoogleComponent');
        wrapper.simulate('click');
        expect(wrapper.length).toBe(1);
    });
    it('Should render submitEventhadle', () => {
        let wrapsubmitEventhadle = findByTestattr(component, "submitEventhadle");
        wrapsubmitEventhadle.simulate('submit');
        expect(wrapsubmitEventhadle.length).toBe(1);
    });
})