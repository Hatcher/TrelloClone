import React, { Component } from 'react';
import { connect } from 'react-redux';
import Board from './components/Board.js';
import { DragDropContext } from 'react-dnd';
import { Button } from 'antd';
import { addBoard } from './actions/BoardActions.js';
import HTML5Backend from 'react-dnd-html5-backend';
import './App.css';
var helpers = require('./helpers.js');

class App extends Component {
  constructor(props){
    super(props);
    this.addNewBoard = this.addNewBoard.bind(this);
  }
  
  addNewBoard(){
    this.props.dispatch(
      addBoard(helpers.makeUniqueId(this.props.state.boards))
    )
  }

  render() {
    const { state, dispatch } = this.props;  
    console.log(state);
    return (
      <div className="App">
        <div style={{backgroundColor : "#e8e8e8", height: "68px", textAlign:"left"}}>
          <div style={{fontSize:"28px", marginLeft:"120px"}}> 
            Trello Clone
            <span style={{marginTop:"-4px", marginLeft:"2px", fontSize:"14px", display:"block"}}>by Anderson Thomas</span>
          </div>
        </div>
        <Button onClick={this.addNewBoard}>
          New Board 
        </Button>
        {
          state.boards !== undefined ? state.boards.map((board, index) => {
            return (
              <Board board={board} cards={state.cards} key={index} dispatch={dispatch} />
            )
          }) : ''
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { state };
};

export default DragDropContext(HTML5Backend)(connect(mapStateToProps)(App));
