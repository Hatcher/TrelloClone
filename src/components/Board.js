import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import { Button } from 'antd';
import { removeBoard } from '../actions/BoardActions.js';
import Card from './Card.js';
import { ItemTypes } from './Constants.js';

const boardTarget = {
  drop(props, monitor, component){
    //    const item = monitor.getItem();
    
    // Need to specify some order for cards
    // Use redux to hold general state of app?
    // Use item id in redux to move items, currently only seeing dragpreview because no state management.
  }
}

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget()
  };
}

class Board extends Component {
  render () {
    const { connectDropTarget, dispatch, board } = this.props;
    console.log(board.id);
    console.log(dispatch);
    return connectDropTarget(
      <div style={{border: "2px solid black", marginRight: "10px", marginLeft:"10px", display:"inline-block"}}>
        <Card />
        <Card />
        <Button type="danger" style={{marginBottom:"10px" }} onClick={() => dispatch(removeBoard(board.id))}>
          Delete Board
        </Button>
      </div>
  )}
}
export default DropTarget([ItemTypes.CARD], boardTarget, collect)(Board);

