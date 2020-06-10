import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import Reducers from './reducers/Reducer';

const reducer = combineReducers({ Reducers });

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
