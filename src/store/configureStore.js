import {createStore,applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'; //Redux middleware that spits an error on you when you try to mutate your state either inside a dispatch or between dispatches.
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk,reduxImmutableStateInvariant())
    );
}