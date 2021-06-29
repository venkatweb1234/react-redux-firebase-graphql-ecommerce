import { createStore, applyMiddleware } from "redux";
import createMiddlewareSaga from "redux-saga";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";
import { persistStore } from "redux-persist";

export const middleWareSaga = createMiddlewareSaga();
export const middlewares = [logger, thunk, middleWareSaga];
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);
middleWareSaga.run(rootSaga);

export const persistor = persistStore(store);
export default { persistor, store };
