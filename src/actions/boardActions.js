import { ADD_CARD, REMOVE_CARD, MOVE_CARD } from './Types.js';

export function addCard(title, boardIndex){
  return {
    type : ADD_CARD,
    title,
    boardIndex,
  };
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
