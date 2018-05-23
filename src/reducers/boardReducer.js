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
  let boards = [].concat(state);
  switch(action.type){
    case ADD_BOARD:
      boards.push({  
        id : action.boardIndex, 
        cards : [] 
      });
      newState = boards;
      break;

    case REMOVE_BOARD:
      console.log("Remove is called" );
      boards.splice(action.boardIndex, 1);
      newState = boards;
      break;

    default:
      return state;
  }
  console.log(newState);
  return newState;
}

export default BoardReducer;
