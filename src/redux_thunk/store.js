import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import userReducer from './reducers';
import {thunk} from 'redux-thunk';

const rootReducer = combineReducers({userReducer});

const store = createStore(rootReducer, applyMiddleware(thunk));
console.log('storestorestorestore', store);

export default store;
