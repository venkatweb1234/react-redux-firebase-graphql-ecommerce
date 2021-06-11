import React from 'react';
import {findByTestattr} from '../../_Utils/_common_test_functions';
import {shallow} from 'enzyme';
import HomepageLayout from './homepage-layout-component';

const steup= (props={}) =>{
    const component = shallow(<HomepageLayout {...props}/>);
    return component;
}

describe('Home page component Ecomm', () =>{
    let HomepageCompoent;
    beforeEach(() =>{
        HomepageCompoent = steup();
    });
    it('Should pass the test case Home page compoent', () =>{
        const wrapperhomepageComponent = findByTestattr(HomepageCompoent, 'HomepageCompoent');
        expect(wrapperhomepageComponent.length).toBe(1);
    });
});
