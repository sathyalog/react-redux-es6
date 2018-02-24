// this is to combine reducers

import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';

const rootReducer = combineReducers({
    courses, //ES6 shorthand property name which is equivalent to courses:courses in ES5. Here courses is a store value
    authors
});

export default rootReducer;