import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { ServiceStackNavigator } from "./StackNavigator";
import TabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Contact" component={ServiceStackNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
