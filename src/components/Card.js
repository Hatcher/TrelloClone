import React, { Component } from 'react';
import { Card as AntCard } from 'antd';
import { ItemTypes } from './Constants.js';
import { DragSource } from 'react-dnd';

const CardSource = {
  beginDrag(props){
    return props;
  },

  endDrag(props, monitor, component){
    if(!monitor.didDrop()){
      return;
    }
    return props;
  }
};

function collect(connect, monitor){
  return {
    isDragging: monitor.isDragging(),
    connectDragSource : connect.dragSource()
  }
}

class Card extends Component {
  render () {
    const { connectDragSource } = this.props;  

    return connectDragSource(
      <div className="card">
      <AntCard className="card" style={{width : "90%", margin:"0 auto", marginTop:"10px", marginBottom:"10px" }}> 
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>       
      </AntCard>
      </div>
  )}
}
export default DragSource(ItemTypes.CARD, CardSource, collect)(Card);

