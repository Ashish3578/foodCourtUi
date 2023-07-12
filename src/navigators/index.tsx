import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SplashScreen} from '../screens';

const Stack = createNativeStackNavigator();

export const Navigators = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
