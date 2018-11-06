import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../actions";
import AuthLoadingScreen from "../screens/AuthLoadingScreen";

class AuthLoadingContainer extends React.Component {
  render() {
    return React.createElement(AuthLoadingScreen);
  }

  componentDidMount() {
    this.props.navigation.navigate(
      this.props.authInfo &&
        this.props.authInfo.userInfo &&
        this.props.authInfo.loggedIn
        ? "App"
        : "Auth"
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

export default connect(mapStateToProps, mapDispatchToProps)(
  AuthLoadingContainer
);
