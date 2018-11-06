import React, { Component } from 'react';
import { Button, View } from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, marginTop: 50 }}>
        <Button
          onPress={() => this.props.logout()}
          title="Click here to log out"
        />
      </View>
    );
  }
}
