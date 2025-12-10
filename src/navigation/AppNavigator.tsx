import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterNavigator from './RegisterNavigator';
import { RootStackParamList } from './types';
import HomeNavigator from './HomeNavigator';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Iniciar sesión' }}/>
        <Stack.Screen name="Register" component={RegisterNavigator} options={{ headerShown: false }}/>
        <Stack.Screen name="Panel" component={HomeNavigator} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
