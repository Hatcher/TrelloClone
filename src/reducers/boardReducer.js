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
      let arr = boards.filter(entry => entry.id !== action.boardId);
      newState = arr;
      break;
    
    case UPDATE_TITLE:
      let newBoard = boards.filter(entry => entry.id === action.boardId);
      newBoard = newBoard[0];
      console.log(newBoard);
      newBoard.title = action.title;
      newState = boards;
      break;
    
    case ADD_CARD:
      let board = boards.filter(entry => entry.id === action.boardId);
      board = board[0];
      console.log(action.boardId);
      board.cards.push({ id : action.cardId });
      newState = boards;
      break;

    default:
      return state;
  }
  return newState;
}

export default BoardReducer;
