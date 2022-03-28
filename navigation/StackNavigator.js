import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home.tsx";
import About from "../screens/About";
import Servicios from "../screens/Servicios";
import MyServices  from "../screens/MyServices";
import  PerfilSettings from "../screens/PerfilSettings";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#000000",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
};

const ServiceStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Servicios" component={Servicios} />
    </Stack.Navigator>
  );
};

const MyServiceStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Mis Servicios" component={MyServices} />
    </Stack.Navigator>
  );
};


const PerfilStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Editar Perfil" component={PerfilSettings} />
    </Stack.Navigator>
  );
};

export { MainStackNavigator, ServiceStackNavigator,MyServiceStackNavigator,PerfilStackNavigator };
