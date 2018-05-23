import { ADD_BOARD, REMOVE_BOARD } from './Types.js';

export const addBoard = (boardIndex) => dispatch => {
  dispatch({
    type : ADD_BOARD,
    boardIndex,
  });
}

export const removeBoard = (boardIndex) => dispatch => {
  return {
    type : REMOVE_BOARD,
    boardIndex
  }
}

// This might need a targetCardIndex, so that the source card can be moved to a specific location.
