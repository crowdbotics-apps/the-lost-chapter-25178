import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import Maps217109Navigator from '../features/Maps217109/navigator';
import Additem217108Navigator from '../features/Additem217108/navigator';
import Maps217104Navigator from '../features/Maps217104/navigator';
import UserProfile217100Navigator from '../features/UserProfile217100/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
Maps217109: { screen: Maps217109Navigator },
Additem217108: { screen: Additem217108Navigator },
Maps217104: { screen: Maps217104Navigator },
UserProfile217100: { screen: UserProfile217100Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
