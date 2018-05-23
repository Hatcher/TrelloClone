import { combineReducrers } from 'redux';
import cardReducer from './cardReducer';

export default combineReducrers({
  cards: cardReducer
});
