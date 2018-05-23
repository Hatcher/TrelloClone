import React, { Component } from 'react';
import { Card, Input } from 'antd';

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
      <div>
        //Title that is editable
        <Input placeholder={this.state.title} style={{visibility:this.state.inputVisibility}} />
      </div>
  )}
}
export default Card;

