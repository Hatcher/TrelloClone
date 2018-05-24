import { ADD_BOARD, REMOVE_BOARD, UPDATE_TITLE, ADD_CARD} from '../actions/Types.js';
import { cardState } from './CardReducer.js';

//We have a set of cards in each board that can be moved, added, or removed. 
export const boardState = [{
  id: 0,
  cards: cardState
}]

const BoardReducer = (state = boardState, action) => {
  let newState = {};
  let boards = [].concat(state);
  switch(action.type){
    case ADD_BOARD:
      boards.push({  
        id : action.boardId, 
        cards : [{
          id: 0, 
        }] 
      });
      newState = boards;
      break;
  
    case REMOVE_BOARD:
      console.log(action.boardId);
      let arr = boards.filter((entry) => {if(entry.id !== action.boardId) return true; });
      newState = arr;
      break;
    
    case UPDATE_TITLE:
      let newBoard = boards[action.boardIndex];
      newBoard.title = action.title;
      newState = boards;
      break;
    
    case ADD_CARD:
      let board = boards[action.boardIndex];
      board.cards.push({ id : action.cardId });
      newState = boards;
      break;

    default:
      return state;
  }
  return newState;
}

export default BoardReducer;
