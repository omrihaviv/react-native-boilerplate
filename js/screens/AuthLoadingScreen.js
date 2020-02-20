import React, { Component } from 'react';
import { ActivityIndicator, View } from "react-native";

export default class AuthLoadingScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: "center"}}>
        <ActivityIndicator />
      </View>
    );
  }
}
