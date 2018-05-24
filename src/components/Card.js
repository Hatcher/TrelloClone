import React, { Component } from 'react';
import { Card as AntCard } from 'antd';
import { ItemTypes } from './Constants.js';
import { DragSource } from 'react-dnd';
import EditableText from './EditableText.js';
import { updateContent } from '../actions/CardActions.js';
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
  
  handleContentChange(e){
    const { dispatch, card } = this.props;
    dispatch(updateContent(card.id, e.target.value));
  }
  
  render () {
    const { connectDragSource } = this.props;  

    return connectDragSource(
      <div className="card">
        <AntCard className="card" style={{width : "90%", margin:"0 auto", marginTop:"10px", marginBottom:"10px" }}>     
          <EditableText
            textArea={true}
            value={this.props.card.content}
            handleValueChange={this.handleContentChange.bind(this)}
            placeHolder="Add content to this card"
            doubleClickPrompt="Double Click to Edit This Card"
            textClass="cardText"
          />
        </AntCard>
      </div>
  )}
}
export default DragSource(ItemTypes.CARD, CardSource, collect)(Card);

