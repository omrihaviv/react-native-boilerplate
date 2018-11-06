import { createSwitchNavigator } from "react-navigation";
import AuthNavigator from "./AuthNavigator";
import AppNavigator from "./AppNavigator";
import AuthLoadingContainer from "../containers/AuthLoadingContainer";

const RootNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingContainer,
    Auth: AuthNavigator,
    App: AppNavigator
  },
  {
    initialRouteName: "AuthLoading"
  }
);

export default RootNavigator;
