import React from "react";
import HomeContainer from "../containers/HomeContainer";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function AppNavigator() {
    return (
    <Stack.Navigator options={{ headerMode: "none" }} >
        <Stack.Screen name="Home" component={HomeContainer} />
    </Stack.Navigator>
    );
  }

export default AppNavigator;
