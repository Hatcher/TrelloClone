import { ADD_BOARD, REMOVE_BOARD, UPDATE_TITLE, MOVE_CARD } from './Types.js';

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

export const moveCard = (targetBoardId, sourceBoardId, cardId) => dispatch => {
  dispatch({
    type : MOVE_CARD,
    targetBoardId,
    sourceBoardId,
    cardId,
  });
}
