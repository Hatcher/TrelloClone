import React, { Component } from 'react';
import { connect } from 'react-redux';
import Board from './components/Board.js';
import { DragDropContext } from 'react-dnd';
import { Button } from 'antd';
import { addBoard } from './actions/BoardActions.js';
import HTML5Backend from 'react-dnd-html5-backend';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.addNewBoard = this.addNewBoard.bind(this);
  }

  addNewBoard(){
    this.props.dispatch(
      addBoard(this.props.boards.length)
    )
  }
  render() {
    return (
      <div className="App">
        <Button onClick={this.addNewBoard}>
          New Board 
        </Button>
        {
          this.props.boards.map((board, index) => {
            console.log(index);
             return (
               <Board board={board} index={index} key={index} dispatch={this.props.dispatch} />)
          })
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("About to map state to props");
  console.log(state);
  return {
    boards : state.boards 
  };
};

export default DragDropContext(HTML5Backend)(connect(mapStateToProps)(App));
