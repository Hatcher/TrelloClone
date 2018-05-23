import { combineReducers } from 'redux';
import CardReducer from './CardReducer.js';
import BoardReducer from './BoardReducer.js';

export default combineReducers({
  cards : CardReducer,
  boards : BoardReducer
});
