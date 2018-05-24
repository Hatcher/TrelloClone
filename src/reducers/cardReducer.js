import { ADD_CARD, REMOVE_CARD, UPDATE_TITLE } from '../actions/Types.js';
var helpers = require('../helpers.js');
//We have a set of cards in each board that can be moved, added, or removed.
// This reducer handles the actions available to an individual card though.
// Should add a modifier for title & body.
export const cardState = [
  {
    id : helpers.makeId(), 
  }
];

const CardReducer = (state = cardState, action) => {
  let newCard = {};
  let newState = [].concat(state);
  switch(action.type){
    case ADD_CARD:
      newCard.id = action.cardId; 
      newState.push(newCard);
      break;

    case REMOVE_CARD:
      let stateCards = state.cards;
      stateCards.splice(action.cardIndex, 1);
      newState = { };
      break;

    /*case UPDATE_TITLE: 
      console.log(state);
      newCard = {
        ...state[action.cardIndex]
      };
      newCard.id = action.cardIndex;
      newCard.title = action.title; 
      newState.push(newCard);
      break;*/

    default:
      return state;
  }
  return newState;
}

export default CardReducer;
