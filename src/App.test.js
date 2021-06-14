import React from 'react';
import { shallow } from 'enzyme';
import {findByTestattr, testStore} from './_Utils/_common_test_functions';
import App from './App';
import {mapDispatchToProps,mapStateToProps} from './App'


const steUp = (initialState={}) =>{
  const store = testStore(initialState)
  const wrapper = shallow(<App store={store} />)
  return wrapper;
}

describe('App Compoent Ecomm', () =>{
  let component;
  beforeEach(() =>{
    const initialState ={
      currentUser:null,
      setCurrentUser:jest.fn
    }
      component =steUp();
  });
  it('Should render App component Ecomm', () =>{
      const wrapper = findByTestattr(component, 'appComponent');
      expect(wrapper.length).toBe(1);
  });

});

// describe('App Renders', () => {
//   it('should show previously rolled value', () => {
//       const initialState = {
//         currentUser: 'null
//       };

//       // Just call the method directly passing in sample data
//       // to make sure it does what it's supposed to
//       expect(mapStateToProps(initialState).currentUser).toEqual(1);
//   });

//   it('should roll the dice again when button is clicked', () => {
//       const dispatch = jest.fn();

//       // For the `mapDispatchToProps`, call it directly but pass in
//       // a mock function and check the arguments passed in are as expected
//       mapDispatchToProps(dispatch).setCurrentUser();
//       expect(dispatch.mock.calls[0][0]).toEqual({ type: 'SET_CURRENT_USER'});
//   });
// });
