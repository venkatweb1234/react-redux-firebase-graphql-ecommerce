import React from 'react';
import {shallow} from 'enzyme';
import {findByTestattr} from '../../../_Utils/_common_test_functions';
import Registrationabc from './registration-component';

const setup = (props={}) =>{
    const registCompo = shallow(<Registrationabc {...props} />);
    return registCompo;
}
describe('Registartion Compoent test', () =>{
 let registrationCompo;
 beforeEach(() =>{
     registrationCompo = setup();
 });
 it('Should Render Registartion compoent', () =>{
     let wrapperRegisComponent = findByTestattr(registrationCompo, 'registrationComponent');
     expect(wrapperRegisComponent.length).toBe(1);
 });

 it('Should render registartion page', () =>{
     let wrapperRegispageCompo =  findByTestattr(registrationCompo, 'registartionPage');
     expect(wrapperRegispageCompo.length).toBe(1);
 })
});