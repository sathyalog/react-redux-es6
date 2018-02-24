import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {loadCourses} from './actions/courseAction';
import {loadAuthors} from './actions/authorActions';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider> , 
    document.getElementById('root'));
registerServiceWorker();
