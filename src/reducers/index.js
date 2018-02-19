// this is to combine reducers

import {combineReducers} from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
    courses //ES6 shorthand property name which is equivalent to courses:courses in ES5
});

export default rootReducer;