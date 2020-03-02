import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { ProductOverviewScreen } from "../screens/shop";
import COLORS from "../constants/COLORS";
import { isAndroid } from "../utils/platform";

export const ProductNavigator = createStackNavigator(
  {
    ProductsOverview: ProductOverviewScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: isAndroid() ? COLORS.primary : ""
      },
      headerTintColor: isAndroid() ? "white" : COLORS.primary
    }
  }
);

export default createAppContainer(ProductNavigator);
