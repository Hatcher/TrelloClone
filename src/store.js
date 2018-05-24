import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducers from './reducers';
import { boardState } from './reducers/BoardReducer.js';
import { cardState } from './reducers/CardReducer.js';

const initialState = {
  boards : boardState.boards,
  cards : cardState
};

const middleware = [thunk];

//Root reducer amalgomates the individual reducers to combine store.
const store = createStore(
  rootReducers,
  composeWithDevTools(
    applyMiddleware(...middleware),
  )
);

export default store;
