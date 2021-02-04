import React from 'react';
import ContactsScreen from "../screens/ContactsScreen"
import LoginScreen from "../screens/LoginScreen"
import SignupScreen from "../screens/SignupScreen"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from "react-redux";

const Stack = createStackNavigator()

 function AppContainer({auth}) {
  return (
    <NavigationContainer>
      {
        auth.login ?
          <Stack.Navigator>
            <Stack.Screen
              options={{
                header: () => null
              }}
              name='ContactsScreen' component={ContactsScreen} />
          </Stack.Navigator>
          :
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
          </Stack.Navigator>

      }
    </NavigationContainer>
  );
}

const mapStateToProp = (state) => {
  return { auth: state }
}

export default connect(mapStateToProp)(AppContainer);