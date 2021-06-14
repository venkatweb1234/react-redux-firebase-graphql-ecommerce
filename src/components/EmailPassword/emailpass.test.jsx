import React from 'react';
import { shallow } from 'enzyme';

import { findByTestattr } from '../../_Utils/_common_test_functions';
import EmailPassword from './email-pass-component';

const setup = (props = {}) => {
    const EmailPassAuthWrapperCompoentAccess = shallow(<EmailPassword {...props} />);
    return EmailPassAuthWrapperCompoentAccess;
}

describe('Render EmailPassAuthWrapperCompoentAccess', () => {
    let wrapperEmailPassAuthWrapperCompoentAccess;
    beforeEach(() => {
        wrapperEmailPassAuthWrapperCompoentAccess = setup();
    });
    it('Should render EmailPassAuthWrapperCompoentAccess', () => {
        let wrapper = findByTestattr(wrapperEmailPassAuthWrapperCompoentAccess, 'EmailPassAuthWrapperCompoentAccess');
        expect(wrapper.length).toBe(0);
    });

    // it('Should render submitEventhadle', () => {
    //     const handleAnswer = jest.fn();
    //     const wrapper = shallow(<EmailPassword/>);
    //     wrapper.find(".submitEventhadle").simulate("submit");
    //     expect(handleAnswer).toHaveBeenCalled();

    //     // const fakeEvent = { preventDefault: () => console.log('preventDefault') };
    //     // let wrapper = findByTestattr(wrapperEmailPassAuthWrapperCompoentAccess, 'submitEventhadle');
    //     // console.log(wrapper);
    //     // wrapper.simulate('submit', fakeEvent);
    //     // expect(wrapper.length).toBe(1);
    // });
})