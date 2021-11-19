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
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Home from './home';
import { theme } from './theme';

const App = () => {


  return (
    <GestureHandlerRootView>
      <SafeAreaView style={{ flex: 1, backgroundColor: theme.primary }}>
        <StatusBar barStyle='light-content' />
        <Home />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};


export default App;
