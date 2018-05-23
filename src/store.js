import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

//Root reducer amalgomates the individual reducers to combine store.
const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...applyMiddleware)
);

export default store;
