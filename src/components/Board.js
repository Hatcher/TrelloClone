import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import Card from './Card.js';
import { ItemTypes } from './Constants.js';

const boardTarget = {
  drop(props, monitor, component){
    const item = monitor.getItem();
    // Need to specify some order for cards
    // Use redux to hold general state of app?
  }
}

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget()
  };
}

class Board extends Component {
  render () {
    const { connectDropTarget } = this.props;
    return connectDropTarget(
      <div style={{display:"inline-block"}}>
        <Card />
        <Card />
      </div>
  )}
}
export default DropTarget([ItemTypes.CARD], boardTarget, collect)(Board);

