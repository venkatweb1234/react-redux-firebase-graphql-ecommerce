import React from 'react';
import Footer from './footer-component';
import {shallow} from 'enzyme';
import { findByTestattr } from '../../_Utils/_common_test_functions';

const steup = (props={}) =>{
    const component = shallow(<Footer {...props} />);
    return component;
}

describe('FooterPage comPonent', () =>{
    let component;
    beforeEach(()=>{
        component = steup();
    });

    it('Should pass the copy right footerCompoent', () =>{
        const wrapper = findByTestattr(component, 'footerCompoent');
        expect(wrapper.length).toBe(1);
    });
    it('Should pass the test for copyWritter compoent' , () =>{
        const wrapper = findByTestattr(component, 'copyWriterComponent');
        expect(wrapper.length).toBe(1);
    })
})