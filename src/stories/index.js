import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Card from '../components/Card.js';
import Board from '../components/Board.js';
import ProviderContext from './src/ProviderContext.js';
import DragContext from './src/DragContext.js';
import { cardState } from '../reducers/CardReducer.js';
import { boardState } from '../reducers/BoardReducer.js';

storiesOf('Card', module)
  .addDecorator(story => <ProviderContext story={story()} />)
  .add('child of board component', () => 
      <DragContext>
        <Card card={cardState} boardId={"randString"} dispatch={() => console.log("Called to update redux store")} />
      </DragContext>
  );

storiesOf('Board', module)
  .addDecorator(story => <ProviderContext story={story()} />)
  .add('Board with card', () =>
      <DragContext>
        <Board board={boardState[0]} cards={boardState[0].cards} dispatch={() => console.log("Called to update redux store")} />
      </DragContext>
  );

