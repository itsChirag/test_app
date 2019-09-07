/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import Route from './App/navigation/Route';
import { Provider } from 'react-redux';

//get redux store for app level state
import { getStore } from './App/Store/store';
const store = getStore();
const App = class extends React.Component{
  render = () => {
    return (
      <Provider store={store}>
        <Route
          ref={nav => {
            this.navigator = nav;
          }}
        />
      </Provider>
    );
  }
  
};

export default (App);