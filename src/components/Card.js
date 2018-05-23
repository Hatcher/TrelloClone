import React, { Component } from 'react';
import { Card as AntCard, Input } from 'antd';
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
  constructor(props){
    super(props);
    // The focus of the card needs to be handled in redux, keep track of which card title is being edited.
    this.state = {
      inputDisplay : false, 
      title : this.props.title ? this.props.title : "Double Click to Edit"
    }
    this.handleTitleState = this.handleTitleState.bind(this);
  }
  
  handleTitleState(){
    this.setState({
      inputDisplay : !this.state.inputDisplay
    });
  }

  getTitle(){
    const { connectDragSource } = this.props;
    return connectDragSource(
      <div> 
        { this.state.inputDisplay &&
          <Input
            autoFocus
            value={this.state.title}
            onChange={(e) => {this.setState({title:e.target.value});}}
            onPressEnter={(e) => {this.setState({inputDisplay : false});}} 
            onBlur={(e) => {this.setState({inputDisplay : false});}} 
            placeholder="Double Click to Add a title" />
        }
        { !this.state.inputDisplay &&
          <div 
            onDoubleClick={this.handleTitleState}
          >
            { this.state.title } 
          </div> 
        }
      </div>
    );
  }

  render () {
    let titleDiv = this.getTitle();
    
    return(
      <AntCard title={ titleDiv } 
        style={{width : 200, margin: "10px 10px 10px 10px" }}> 
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>       
      </AntCard>
  )}
}
export default DragSource(ItemTypes.CARD, CardSource, collect)(Card);

