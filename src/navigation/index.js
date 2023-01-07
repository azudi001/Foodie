import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routes} from './routes';

const Stack = createNativeStackNavigator();

export default function Routes() {
  const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {routes.map((item, index) => {
          let {component} = item;
          return (
            <Stack.Screen
              name={item.name}
              key={item.name}
              component={component}
              options={{
                gestureEnabled: true,
                transitionSpec: {
                  open: config,
                  close: config,
                },
              }}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
