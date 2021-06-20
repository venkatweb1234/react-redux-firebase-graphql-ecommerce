import { createStore, applyMiddleware } from 'redux';
import createMiddlewareSaga from 'redux-saga';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import{composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const middleWareSaga = createMiddlewareSaga();
const middlewares = [logger, thunk, middleWareSaga]
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(...middlewares)));
middleWareSaga.run(rootSaga);
export default store
