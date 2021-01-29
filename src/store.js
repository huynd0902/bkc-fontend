import { applyMiddleware, createStore } from 'redux';
import ThunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './Reducers';
const middleware = [ThunkMiddleware];
const middlewareEnhancer = applyMiddleware(...middleware);
const enhancers = [middlewareEnhancer];
const composedEnhancers = composeWithDevTools({trace: true});
const store = createStore(rootReducer, undefined, composedEnhancers(
    applyMiddleware(ThunkMiddleware)
));
export default store;