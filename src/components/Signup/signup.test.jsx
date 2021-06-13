import React from 'react';
import { shallow } from 'enzyme';
import { findByTestattr } from '../../_Utils/_common_test_functions';
import Signup from './signup-component';

const setup = (props = {}) => {
    const component = shallow(<Signup {...props} />);
    console.log(component.debug());
    return component;
}

describe('User signup', () => {
    let loginComponent;
    beforeEach(() => {
        loginComponent = setup();
    })
    it('should fail if no credentials are provided', () => {
        const fakeEvent = { preventDefault: () => console.log('preventDefault') };
        let wrapper = findByTestattr(loginComponent, 'signupDataSubmit');
        wrapper.simulate('submit', fakeEvent);
        expect(wrapper.length).toBe(1);
    });
});