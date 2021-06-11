import React from 'react';
import { shallow } from 'enzyme';
import {findByTestattr} from './_Utils/_common_test_functions';
import App from './App';

const steup = (props={}) =>{
  const component = shallow(<App {...props} />);
  return component;
}

describe('App Compoent Ecomm', () =>{
  let component;
  beforeEach(() =>{
      component =steup();
  });
  it('Should render App component Ecomm', () =>{
      const wrapper = findByTestattr(component, 'appComponent');
      expect(wrapper.length).toBe(1);
  });
//   it('Should render Main component Ecomm', () =>{
//     const wrapper = findByTestattr(component, 'mainComponent');
//     expect(wrapper.length).toBe(1);
// });
});
