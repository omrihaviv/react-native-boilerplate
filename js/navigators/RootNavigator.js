import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../actions";
import AuthNavigator from "./AuthNavigator";
import AppNavigator from "./AppNavigator";
import AuthLoadingScreen from "../screens/AuthLoadingScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

class RootNavigator extends React.Component {
  render() {
    if (this.props.authInfo && this.props.authInfo.loading) {
      return (
        <NavigationContainer>
          <AuthLoadingScreen />
        </NavigationContainer>
      )
    }

    return (
      <NavigationContainer>
        <Stack.Navigator headerMode='none' >
          {this.props.authInfo &&
            this.props.authInfo.userInfo &&
            this.props.authInfo.loggedIn
           ? (
            <>
              <Stack.Screen name="App" component={AppNavigator} />
            </>
          ) : (
            <Stack.Screen name="Auth" component={AuthNavigator} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

function mapStateToProps(state) {
  return {
    authInfo: state.authInfo
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RootNavigator);
