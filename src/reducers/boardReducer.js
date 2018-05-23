import { ADD_CARD, MOVE_CARD, REMOVE_CARD } from '../actions/Types.js;

//We have a set of cards in each board that can be moved, added, or removed. 
const initialState = {
  boards : [],
}

export default function( state = initialState, action){
  let newState = {};
  let boards = state.boards;
  switch(action.type){
    case ADD_CARD:
      boards[action.boardIndex].cards.push({
        title: action.title
      });
      newState = { boards };
      break;

    case REMOVE_CARD:
      boards[action.boardIndex].cards.splice(action.cardIndex, 1);
      newState = { boards };
      break;

    //Move a board
    case MOVE_CARD:
      break;

    default:
      return state;
  }
  return Object.assign({}, state, newState);
}
