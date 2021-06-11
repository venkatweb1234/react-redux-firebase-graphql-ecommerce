import React from 'react';
import {findByTestattr} from '../../_Utils/_common_test_functions';
import {shallow} from 'enzyme';
import MainLayout from './mainlayout-component';

const steup= (props={}) =>{
    const component = shallow(<MainLayout {...props}/>);
    return component;
}

describe('Main page component Ecomm', () =>{
    let component;
    beforeEach(() =>{
        component = steup();
    });
    it('Should pass the test case Main page compoent', () =>{
        const wrapperhomepageComponent = findByTestattr(component, 'mainCompoent');
        expect(wrapperhomepageComponent.length).toBe(1);
    });
});
