import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/FontAwesome"
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import { ServiceStackNavigator } from "./StackNavigator";
import TabNavigator from "./TabNavigator";
import  PerfilSettings from "../screens/PerfilSettings";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabNavigator}
        options={{
           title: 'Home',
           drawerIcon: ({focused, size}) => (
              <Icon
                 name="home"
                 size={size}
                 color={focused ? '#7cc' : '#ccc'}
              />
           ),
        }}
   />
      <Drawer.Screen name="PerfilEdit" component={PerfilSettings}
        options={{
           title: ' Editar',
           drawerIcon: ({focused, size}) => (
              <Icon
                 name="user"
                 size={size}
                 color={focused ? '#7cc' : '#ccc'}
              />
           ),
        }}
   />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
