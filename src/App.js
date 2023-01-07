/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {QueryClient, QueryClientProvider} from 'react-query';
import Routes from './navigation';
import {theme} from './theme';
import {Provider} from 'react-redux';
import {store} from './home/redux/store';
import {Text} from 'react-native';
import Toast from './home/New-screen/modules/widget/Toast';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import StatusBarWidget from './home/New-screen/modules/widget/StatusBarWidget';

// Create a client
const queryClient = new QueryClient();

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <StatusBarWidget/>
          <SafeAreaView
            style={{flex: 1, backgroundColor: theme.dark_background}}>
            <Toast />
            <Routes />
          </SafeAreaView>
        </Provider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
};

export default App;

const style = StyleSheet.create({
  StatusBar: {
    height: 30,
    backgroundColor: 'red',
  },
});
