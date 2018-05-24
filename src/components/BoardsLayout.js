import React, { Component } from 'react';
import Board from './Board.js';

class BoardsLayout extends Component {

  render () {
    const { boards, dispatch, cards } = this.props;
    return(
      <div> 
        {
          boards !== undefined ? boards.map((board, index) => {
            return (
              <Board board={board} cards={cards} key={index} dispatch={dispatch} />
            )
          }) : ''
        }
      </div>
  )}
}
export default BoardsLayout;

