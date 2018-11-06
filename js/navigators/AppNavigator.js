import { createStackNavigator } from "react-navigation";
import HomeContainer from "../containers/HomeContainer";

const AppNavigator = createStackNavigator(
    {
        Main: HomeContainer
    }
);

export default AppNavigator;
