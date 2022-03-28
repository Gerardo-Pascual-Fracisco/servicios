import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/FontAwesome"
import Icon2 from 'react-native-vector-icons/MaterialIcons';


import { MainStackNavigator, ServiceStackNavigator,MyServiceStackNavigator,PerfilStackNavigator} from './StackNavigator'

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (

    <Tab.Navigator>
      <Tab.Screen name="Home"
        component={MainStackNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name="Servicios"
        component={ServiceStackNavigator}
        options={{
          tabBarLabel: 'Servicios',
          tabBarIcon: ({ color, size }) => (
            <Icon2 name="home-work" color={color} size={size} />
          ),
        }}
      />
       <Tab.Screen name="MyServices"
        component={MyServiceStackNavigator}
        options={{
          tabBarLabel: 'Mis Servicios',
          tabBarIcon: ({ color, size }) => (
            <Icon2 name="contacts" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name="Perfil"
        component={PerfilStackNavigator}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color, size }) => (
            <Icon2 name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator