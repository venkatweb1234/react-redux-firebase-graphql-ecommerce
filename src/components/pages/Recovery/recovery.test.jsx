import React from 'react';
import { shallow } from 'enzyme';
import { findByTestattr } from '../../../_Utils/_common_test_functions';
import Recovery from './recovery-compoent'
const setup = (props = {}) => {
    const EmailPasswordTest = shallow(<Recovery {...props} />);
    return EmailPasswordTest;
}

describe('Render EmailPassAuthWrapperCompoentAccess', () => {
    let wrappeEmailPasswordTest;
    beforeEach(() => {
        wrappeEmailPasswordTest = setup();
    });
    it('Should render EmailPassAuthWrapperCompoentAccess', () => {
        let wrapper = findByTestattr(wrappeEmailPasswordTest, 'EmailPasswordTest');
        expect(wrapper.length).toBe(1);
    });
});
