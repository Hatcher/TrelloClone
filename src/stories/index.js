import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import Card from '../components/Card.js';
import ProviderContext from './src/ProviderContext.js';
import DragContext from './src/DragContext.js';
import { cardState } from '../reducers/CardReducer.js';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯 hello
      </span>
    </Button>
  ));

storiesOf('Card', module)
  .add('child of board component', () => 
    <ProviderContext>
    <DragContext>
    <Card card={cardState} boardId={"randString"} dispatch={() => console.log("Called to update redux store")} />
    </DragContext>
    </ProviderContext>
  );

