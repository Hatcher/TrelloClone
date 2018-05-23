import { ADD_BOARD, REMOVE_BOARD } from '../actions/Types.js';

//We have a set of cards in each board that can be moved, added, or removed. 
export const boardState = {
  boards : [{
      id: 0,
      cards: []
    }],
}

const BoardReducer = (state = boardState, action) => {
  let newState = {};
  let boards = state;
  switch(action.type){
    case ADD_BOARD:
      boards.push({  
        id : action.boardIndex, 
        cards : [] 
      });
      return  boards;
      break;

    case REMOVE_BOARD:
      console.log(action.boardIndex);
      boards[action.boardIndex].splice(action.boardIndex, 1);
      return boards; 
      break;

    default:
      return state;
  }
  return Object.assign({}, state, newState);
}

export default BoardReducer;
