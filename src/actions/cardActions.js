import { ADD_CARD, REMOVE_CARD, MOVE_CARD, UPDATE_TITLE } from './Types.js';

export const addCard = (boardId, cardId) => dispatch => {
  dispatch({
    type : ADD_CARD,
    boardId,
    cardId
  });
}

export function removeCard(cardIndex, boardIndex){
  return {
    type : REMOVE_CARD,
    cardIndex,
    boardIndex
  }
}

// This might need a targetCardIndex, so that the source card can be moved to a specific location.
export function moveCard(sourceColumnIndex, sourceCardIndex, targetColumnIndex){
  return {
    type : MOVE_CARD,
    sourceCardIndex,
    sourceColumnIndex,
    targetColumnIndex
  }
}

export const updateTitle = (cardIndex, title, boardId) => dispatch => {
  dispatch({
    type : UPDATE_TITLE,
    cardIndex,
    title,
    boardId
  });
}
