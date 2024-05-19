import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Start from './screens/start';
import LoginAndSignupScreen from './screens/LoginAndSignupScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="LoginAndSignupScreen" component={LoginAndSignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
