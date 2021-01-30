import React from 'react';
import ContactsScreen from "./src/screens/ContactsScreen"
import LoginScreen from "./src/screens/LoginScreen"
import SignupScreen from "./src/screens/SignupScreen"

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            header: () => null
          }}
          name='LoginScreen' component={LoginScreen} />

        <Stack.Screen
          options={{
            header: () => null
          }}
          name='SignupScreen' component={SignupScreen} />

        <Stack.Screen
          // options={{
          //   header: () => null
          // }}
          name='ContactsScreen' component={ContactsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}