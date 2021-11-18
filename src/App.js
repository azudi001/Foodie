/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Home from './home';
import { theme } from './theme';

const App = () => {


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.primary }}>
      <StatusBar barStyle='light-content' />
      <Home />
    </SafeAreaView>
  );
};


export default App;
