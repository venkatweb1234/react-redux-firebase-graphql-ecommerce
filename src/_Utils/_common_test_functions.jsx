import checkPropTypes from 'check-prop-types';
import { applyMiddleware, createStore } from 'redux';
import rootreducer from '../redux/rootReducer';
import {middlewares} from '../redux/createStore'
export const findByTestattr = (component, attr) =>{
    const wrapper = component.find(`[data-test='${attr}']`);
    
    return wrapper;
}

export const checkPropTypesvalues = (component, expectedPropTypes) =>{
    const propTypesErr = checkPropTypes(component.prototype, expectedPropTypes, 'props', component.name);
    return propTypesErr;
}

export const testStore = (initialState) =>{
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
    return createStoreWithMiddleware(rootreducer, initialState);
}