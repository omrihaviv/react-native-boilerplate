import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../actions";
import HomeScreen from "../screens/HomeScreen";

class HomeContainer extends React.Component {
  render() {
    return React.createElement(HomeScreen,
      {
        logout: () => {
          this.props.performLogout();
          this.props.navigation.navigate("Auth");
        }
      });
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
