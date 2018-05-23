import React, { Component } from 'react';
import { Card as AntCard, Input } from 'antd';

class Card extends Component {
  constructor(props){
    super(props);

    this.state = {
      inputDisplay : this.props.title ? false : true, 
      title : this.props.title ? this.props.title : 'Double Click To Add a Title'
    }
  }
  
  handleTitleState(){
    this.setState({
      inputDisplay : !this.state.inputDisplay
    });
  }

  getTitle(){
    return (
      <div style={{display: !this.state.inputDisplay ? 'none' : 'visible'}}
        onDoubleClick={this.handleTitleState.bind(this)}>
        { this.state.title }
      </div>);
  }

  render () {
    let titleDiv = this.getTitle();
    let displayValue = this.state.inputDisplay ? 'none' : 'visible';
    return(
      <AntCard title={ titleDiv } 
        style={{width : 300 }}> 
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>       
          <div style={{ display: displayValue }}>
            Hi
            <Input placeholder={this.state.title} />
          </div>
      </AntCard>
  )}
}
export default Card;

