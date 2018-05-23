import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducers from './reducers';
import { boardState } from './reducers/BoardReducer.js';

const initialState = {
  boards : boardState.boards
};

console.log(initialState);

const middleware = [thunk];

//Root reducer amalgomates the individual reducers to combine store.
const store = createStore(
  rootReducers,
  initialState,
  composeWithDevTools(
    applyMiddleware(...middleware),
  )
);

export default store;
