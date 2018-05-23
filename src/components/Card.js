import React, { Component } from 'react';
import { Card as AntCard, Input } from 'antd';

class Card extends Component {
  constructor(props){
    super(props);

    this.state = {
      inputVisibility : this.props.title ? 'hidden' : 'visible',
      title : this.props.title ? this.props.title : 'Double Click To Add a Title'
    }
  }
  
  render () {
    return(
      <AntCard title={this.state.title} style={{width : 300}}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>       
        <Input placeholder={this.state.title} style={{visibility:this.state.inputVisibility}} />
      </AntCard>
  )}
}
export default Card;

