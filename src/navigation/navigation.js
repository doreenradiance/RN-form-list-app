import React from 'react';
import ContactsScreen from "../screens/ContactsScreen"
import LoginScreen from "../screens/LoginScreen"
import SignupScreen from "../screens/SignupScreen"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from "react-redux";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { logout } from "../redux/actions/authActions";

const Stack = createStackNavigator()

 function AppContainer({auth,logout}) {
  return (
    <NavigationContainer>
      {
        auth.login ?
          <Stack.Navigator>
            <Stack.Screen
              options={{
                headerRight: () => (
                  <TouchableOpacity style={{marginRight:20}} 
                  onPress={logout}>
                    <Text>Logout</Text>
                  </TouchableOpacity>
                )
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

export default connect(mapStateToProp,{logout})(AppContainer);