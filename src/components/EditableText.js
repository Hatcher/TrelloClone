import React, { Component } from 'react';
import { Input } from 'antd';
const { TextArea } = Input;

class EditableText extends Component {

  constructor(props){
    super(props);
    this.state = {
      inputDisplay : false, 
    }

    this.handleDisplayState = this.handleDisplayState.bind(this);
  }

  // Handles if the input area should be displayed or the title.
  handleDisplayState(e){
    console.log("In state display");
    e.stopPropagation();
    this.setState({
      inputDisplay : !this.state.inputDisplay
    });
  }

  getEditable(){
  }


  render () {
    return(
      <div className={this.props.containerClass}>
        { this.state.inputDisplay && !this.props.textArea && 
          (
            <Input
              autoFocus
              value={this.props.value}
              onChange={this.props.handleValueChange}
              onPressEnter={(e) => {this.setState({inputDisplay : false});}} 
              onBlur={(e) => {this.setState({inputDisplay : false});}} 
              placeholder={this.props.placeholder} />
          )
        }

        { this.state.inputDisplay && this.props.textArea &&
            (
              <TextArea
                autoFocus
                value={this.props.value}
                onChange={this.props.handleValueChange}
                onBlur={(e) => {this.setState({inputDisplay : false});}} 
                placeholder={this.props.placeholder} />
            )
        }

        { !this.state.inputDisplay &&
          <div 
            onDoubleClick={this.handleDisplayState}
          >
            { this.props.value ? this.props.value : this.props.doubleClickPrompt }
          </div> 
        }
      </div>
  )}
}
export default EditableText;

