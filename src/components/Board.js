import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import { Button } from 'antd';
import { removeBoard, updateTitle, moveCard } from '../actions/BoardActions.js';
import { addCard } from '../actions/CardActions.js';
import EditableText from './EditableText.js';
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
    this.handleTitleChange = this.handleTitleChange.bind(this);
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
      <EditableText
        value={board.title}
        handleValueChange={this.handleTitleChange.bind(this)}
        placeholder="Add a title"
        doubleClickPrompt="Double Click to Edit Title"
        containerClass="boardTitle"
        />
    );
  }
  render () {
    const { connectDropTarget, dispatch, board, cards} = this.props;
    let titleDiv = this.getTitle();
    return connectDropTarget(
      <div className="board" style={{display:"inline-block"}}>
        { titleDiv } 
        {
          board.cards.map((cardObj) => {
            let cardFromStore = cards.filter(entry => entry.id === cardObj.id);
            return (
              <Card card={cardFromStore[0]} boardId={board.id} key={"card"+cardObj.id+"board"+board.id} dispatch={dispatch} />
            )
          })
        }
        <div style={{display:"flex", justifyContent:"space-around" }}>
          <Button style={{marginBottom:"10px"}} onClick={this.addCard.bind(this)}>
            Add Card
          </Button>
          <Button type="danger" style={{marginBottom:"10px" }} onClick={() => dispatch(removeBoard(board.id))}>
            Delete Board
          </Button>
        </div>
      </div>
  )}
}
export default DropTarget([ItemTypes.CARD], boardTarget, collect)(Board);

