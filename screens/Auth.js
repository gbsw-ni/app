import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//import {TouchableOpacity, Image, StyleSheet, View, Text} from 'react-native';
import LoginAndSignupScreen from './LoginAndSignupScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Auth(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="loginandsingin" component={LoginAndSignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
