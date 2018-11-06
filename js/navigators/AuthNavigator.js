import { createStackNavigator } from "react-navigation";
import LoginContainer from "../containers/LoginContainer";

const AuthNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginContainer
    }
  },
  {
    headerMode: "none",
    initialRouteName: "Login"
  }
);

export default AuthNavigator;
