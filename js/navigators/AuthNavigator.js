import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import LoginContainer from "../containers/LoginContainer";

const Stack = createStackNavigator();

function AuthNavigator() {
    return (
      <Stack.Navigator headerMode='none' >
          <Stack.Screen name="Login" component={LoginContainer} />
      </Stack.Navigator>
    );
  }

export default AuthNavigator;
