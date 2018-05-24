import { ADD_CARD, REMOVE_CARD, UPDATE_CONTENT } from './Types.js';

export const addCard = (boardId, cardId) => dispatch => {
  dispatch({
    type : ADD_CARD,
    boardId,
    cardId
  });
}

export const deleteCard = (cardId) => dispatch => {
  dispatch({
    type : REMOVE_CARD,
    cardId,
  });
}

export const updateContent = (cardId, content) => dispatch => {
  dispatch({
    type : UPDATE_CONTENT,
    cardId,
    content
  });
}
