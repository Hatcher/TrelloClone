import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import { Button, Input } from 'antd';
import { removeBoard, updateTitle, moveCard } from '../actions/BoardActions.js';
import { addCard } from '../actions/CardActions.js';
import Card from './Card.js';
import { ItemTypes } from './Constants.js';
var helpers = require('../helpers.js');

const boardTarget = {
  drop(props, monitor, component){
    const item = monitor.getItem();
    console.log("dropped");
    props.dispatch(moveCard(props.board.id, item.boardId, item.card.id));
  }
}

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget()
  };
}

class Board extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputDisplay : false, 
    }
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleTitleState = this.handleTitleState.bind(this);
  }
  
  // Handles if the input area should be displayed or the title.
  handleTitleState(){
    this.setState({
      inputDisplay : !this.state.inputDisplay
    });
  }

  // Handles input for board title change
  handleTitleChange(e){
    const { dispatch, board } = this.props;
    dispatch(updateTitle(board.id, e.target.value));
  }
  
  // Creates a new card in store
  addCard(){
    const { dispatch, board, cards } = this.props;
    let cardId = helpers.makeUniqueId(cards);
    dispatch(addCard(board.id, cardId));
  }

  getTitle(){
    const { board } = this.props;
    return (
      <div> 
        { this.state.inputDisplay &&
          <Input
            autoFocus
            value={board.title}
            onChange={this.handleTitleChange}
            onPressEnter={(e) => {this.setState({inputDisplay : false});}} 
            onBlur={(e) => {this.setState({inputDisplay : false});}} 
            placeholder="Double Click to Add a title" />
        }
        { !this.state.inputDisplay &&
          <div 
            onDoubleClick={this.handleTitleState}
          >
            { board.title ? board.title : "Please Double Click to Add a title" } 
          </div> 
        }
      </div>
    );
  }
  render () {
    const { connectDropTarget, dispatch, board, cards} = this.props;
    let titleDiv = this.getTitle();
    return connectDropTarget(
      <div style={{border: "2px solid black", marginRight: "10px", marginLeft:"10px", display:"inline-block"}}>
        { titleDiv } 
        {
          board.cards.map((cardObj) => {
            let cardFromStore = cards.filter(entry => entry.id === cardObj.id);
            return (
              <Card card={cardFromStore[0]} boardId={board.id} key={"card"+cardObj.id+"board"+board.id} dispatch={dispatch} />
            )
          })
        }
        <Button style={{marginBottom:"10px"}} onClick={this.addCard.bind(this)}>
          Add Card
        </Button>
        <Button type="danger" style={{marginBottom:"10px" }} onClick={() => dispatch(removeBoard(board.id))}>
          Delete Board
        </Button>
      </div>
  )}
}
export default DropTarget([ItemTypes.CARD], boardTarget, collect)(Board);

