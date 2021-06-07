import React from 'react';
import {shallow} from 'enzyme';
import {findByTestattr} from '../../_Utils/_common_test_functions';
import Directory from './directory-component';

const steup = (props={}) =>{
    const component = shallow(<Directory {...props} />);
    return component;
}

describe('Directory Compoent Ecomm', () =>{
    let component;
    beforeEach(() =>{
        component =steup();
    });
    it('Should render Directory component Ecomm', () =>{
        const wrapper = findByTestattr(component, 'directoryComponent');
        expect(wrapper.length).toBe(1);
    });
    it('Should render Directory shopWomen component Ecomm', () =>{
        const wrapper = findByTestattr(component, 'shopWomenComponent');
        expect(wrapper.length).toBe(1);
    });
    it('Should render Directory shopMen component Ecomm', () =>{
        const wrapper = findByTestattr(component, 'shopMenComponent');
        expect(wrapper.length).toBe(1);
    });
});
