import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../../store.js';
import { browserHistory } from 'react-router';

export default function ProviderContext({ story }){
  return(
    <Provider store={store}>
      {story}
    </Provider>
  );
};


