import React from 'react';
import {shallow} from 'enzyme';
import {findByTestattr} from '../../_Utils/_common_test_functions';
import AuthWrapper from './authwrap-component';

const setup =(props= {}) =>{
    const component = shallow(<AuthWrapper {...props}/>);
    return component;
}

describe('render AuthWrapper compoents', () =>{
    let wrapperAuth;
    beforeEach(() =>{
        wrapperAuth = setup();
    });

    it('Should render the authWrapperComponent', () =>{
        let authWrapperComponent = findByTestattr(wrapperAuth, 'authWrapperComponent');
        expect(authWrapperComponent.length).toBe(1);
    });

    it('Should render the authWrapperComponent', () =>{
        let authWrapperchildComponent = findByTestattr(wrapperAuth, 'authWrapperchildComponent');
        expect(authWrapperchildComponent.length).toBe(1);
    });

})