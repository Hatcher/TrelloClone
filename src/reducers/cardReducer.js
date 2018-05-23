import { ADD_CARD, MOVE_CARD, REMOVE_CARD } from '../actions/Types.js';

//We have a set of cards in each board that can be moved, added, or removed.
// This reducer handles the actions available to an individual card though.
// Should add a modifier for title & body.
const initialState = {
  card : {}
}

export default function( state = initialState, action){
  let newCard = {};
  let newState = {};
  switch(action.type){
    case ADD_CARD:
      let cardId = state.currentCardIndex;
      newCard.title = action.title;
      newCard.id = cardId; 
      newState = { 
        cards: {
          ...state.cards,
          [cardId]:newCard
        },
        currentCardIndex : state.currentCardIndex++
      };
      break;

    case REMOVE_CARD:
      let stateCards = state.cards;
      stateCards.splice(action.cardIndex, 1);
      newState = { 
        cards: stateCards,
        currentCardIndex : state.currentCardIndex++
      };
      break;
   
    default:
      return state;
  }
  return Object.assign({}, state, newState);
}
