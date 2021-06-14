import {shallow} from 'enzyme';
import React from 'react';
import FormInput from './forminput-compoent';
import{findByTestattr} from '../../../_Utils/_common_test_functions'

const setUp = (props={}) =>{
    const component = shallow(<FormInput {...props} />);
    return component;
}
describe('Renser Input type', () =>{
    let wrapper;
    beforeEach(() =>{
        wrapper = setUp();
    });
    it('Should render Form Input', () =>{
        let component = findByTestattr(wrapper,'formRowInput');

        expect(component.length).toBe(1);
    })
})