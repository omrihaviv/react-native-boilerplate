import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../actions";
import LoginScreen from "../screens/LoginScreen";

class LoginContainer extends React.Component {
  componentDidUpdate() {
    if (this.props.authInfo.loggedIn) {
      this.props.navigation.navigate("App");
    }
  }

  render() {
    return React.createElement(LoginScreen,
      {
        login: (username, password) => this.props.performLogin("login", { username, password })
      });
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
