import { ADD_CARD, MOVE_CARD, REMOVE_CARD } from '../actions/Types.js;

//We have a set of cards in each board that can be moved, added, or removed. 
const initialState = {
  cards : [],
  card : {}
}

export default function( state = initialState, action){
  switch(action.type){
    default:
      return state;
  }
}
