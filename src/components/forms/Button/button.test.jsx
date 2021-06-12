import React from 'react';
import {shallow} from 'enzyme';
import {findByTestattr} from '../../../_Utils/_common_test_functions';
import Buttons from './button-component';

const setup = (props={}) =>{
    const btnComponent  = shallow(<Buttons {...props}/>);
    return btnComponent;
}

describe('btnComponent Google signup with firebase', () =>{
    let btnComponent;
    beforeEach(() =>{
        btnComponent =setup();
    });
    it('Should render google signup compoent', () =>{
        let wrapperbtnComponent = findByTestattr(btnComponent, 'btnComponent');
        expect(wrapperbtnComponent.length).toBe(1);
    })
})