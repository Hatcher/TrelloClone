import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../../store.js';

class ProviderContext extends Component {

  render () {
    return(
      <Provider store={store}>
      { this.props.children } 
      </Provider>
  )}
}
export default ProviderContext;

