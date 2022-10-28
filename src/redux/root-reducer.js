import {combineReducers}from 'redux';

import billReducer from './reducer';

const rootReducer = combineReducers({
    data: billReducer
});

export default rootReducer;