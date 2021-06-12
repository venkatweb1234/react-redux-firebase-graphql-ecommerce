import React from 'react';
import {shallow} from 'enzyme';
import {findByTestattr} from '../../../_Utils/_common_test_functions';
import Homepage from './page-compoent';

const steup = (props={}) =>{
    const component = shallow(<Homepage {...props} />);
    return component;
}

describe('HomePage Compoent Ecomm', () =>{
    let component;
    beforeEach(() =>{
        component =steup();
    });
    it('Should render HomePage component Ecomm', () =>{
        const wrapper = findByTestattr(component, 'homePageComponent');
        expect(wrapper.length).toBe(1);
    });
});