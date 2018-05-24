import React, { Component } from 'react';
import Board from './Board.js';
import { Row, Col } from 'antd';

class BoardsLayout extends Component {
  
  getGrid(){
    const { boards, dispatch, cards } = this.props;
    return boards.reduce((arr, board, index) => {
      arr.push(
        <Col style={{marginTop:"28px"}} span={6}>
          <Board board={board} cards={cards} key={index} dispatch={dispatch} />
        </Col>);
      return arr;
    }, []);
  }

  render () {
    return(
      <div> 
        <Row type="flex" justify="center" align="top">
        {
          this.props.boards !== undefined ? this.getGrid() : ''
        }
        </Row>
      </div>
  )}
}
export default BoardsLayout;

