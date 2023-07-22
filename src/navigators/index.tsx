import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ForgotPasswordScreen, SplashScreen} from '../screens';
import WelcomeScreen from '../screens/WelcomeScreen';
import SigninScreen from '../screens/SigninScreen';
import SignupScreen from '../screens/SignupScreen';
const Stack = createNativeStackNavigator();

export const Navigators = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
    
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="SignInScreen" component={SigninScreen}/>
        <Stack.Screen name="SignUpScreen" component={SignupScreen}/>
        <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
