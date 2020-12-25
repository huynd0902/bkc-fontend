import { combineReducers } from 'redux';
import { appReducer } from './appReducer';
import { bkcReducer } from './bkcReducer';
import { hrReducer } from './hrReducer';

export const rootReducer = combineReducers({
    bkc: bkcReducer,
    app: appReducer,
    hr: hrReducer
})