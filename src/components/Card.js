import React, { Component } from 'react';
import { Card as AntCard, Input } from 'antd';

class Card extends Component {
  constructor(props){
    super(props);

    this.state = {
      inputDisplay : this.props.title ? false : true, 
      title : this.props.title && this.props.title
    }
    this.handleTitleState = this.handleTitleState.bind(this);
  }
  
  handleTitleState(){
    this.setState({
      inputDisplay : !this.state.inputDisplay
    });
  }

  getTitle(){
    return(
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
        style={{width : 300 }}> 
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>       
      </AntCard>
  )}
}
export default Card;

