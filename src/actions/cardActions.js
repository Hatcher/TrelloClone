import { ADD_CARD, REMOVE_CARD, UPDATE_TITLE } from './Types.js';

export const addCard = (boardId, cardId) => dispatch => {
  dispatch({
    type : ADD_CARD,
    boardId,
    cardId
  });
}

export const deleteCard(cardId){
  dispatch({
    type : REMOVE_CARD,
    cardId,
  });
}

export const updateTitle = (cardIndex, title, boardId) => dispatch => {
  dispatch({
    type : UPDATE_TITLE,
    cardIndex,
    title,
    boardId
  });
}
