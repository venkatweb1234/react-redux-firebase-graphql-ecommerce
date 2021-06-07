import React from 'react';
import {shallow} from 'enzyme';
import {findByTestattr} from '../../_Utils/_common_test_functions';
import Header from './header-component';

const steup = (props={}) =>{
    const component = shallow(<Header {...props} />);
    return component;
}

describe('Header Compoent Ecomm', () =>{
    let component;
    beforeEach(() =>{
        component =steup();
    });
    it('Should render Header component Ecomm', () =>{
        const wrapper = findByTestattr(component, 'headerComponent');
        expect(wrapper.length).toBe(1);
    });
    it('Should render a logo Ecomm', () =>{
        const logo = findByTestattr(component, 'ReactLogo');
        expect(logo.length).toBe(1);
    });
});