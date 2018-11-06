import React, { Component } from 'react';
import { Button, TextInput, View } from 'react-native';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', marginTop: 50 }}>
        <TextInput
          style={{ height: 40 }}
          placeholder="Insert username"
          onChangeText={(username) => this.setState({ username })}
        />
        <TextInput
          style={{ height: 40 }}
          placeholder="Insert password"
          onChangeText={(password) => this.setState({ password })}
        />
        <Button
          onPress={() => this.props.login(this.state.username, this.state.password)}
          title="Click here to login"
        />
      </View>
    );
  }
}
