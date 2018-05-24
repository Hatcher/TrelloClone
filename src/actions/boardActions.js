import { ADD_BOARD, REMOVE_BOARD, UPDATE_TITLE, ADD_CARD, MOVE_CARD } from './Types.js';

export const addBoard = (boardId) => dispatch => {
  dispatch({
    type : ADD_BOARD,
    boardId,
  });
}

export const removeBoard = (boardId) => dispatch => {
  dispatch({
    type : REMOVE_BOARD,
    boardId
  });
}

export const updateTitle = (boardId, title) => dispatch => {
  dispatch({
    type : UPDATE_TITLE,
    boardId,
    title
  });
}

export const addCard = (boardIndex, cardId) => dispatch => {
  dispatch({
    type : ADD_CARD,
    boardIndex,
    cardId
  });
}

export const moveCard = (sourceBoardId, targetBoardId, cardId) => dispatch => {
  dispatch({
    type : MOVE_CARD,
    targetBoardId,
    sourceBoardId,
    cardId,
  });
}

// This might need a targetCardIndex, so that the source card can be moved to a specific location.
