import reducer from '../reducers/users.js';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store  = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store ;