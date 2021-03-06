import React from 'react';
import './../styles/App.css';
import {Provider} from 'react-redux';
import Wrapper from './Wrapper';
import store from './../store/index'

const App = () => {
  return (
    <Provider store={store}>
      <Wrapper/>
    </Provider>
  );
}

export default App;
