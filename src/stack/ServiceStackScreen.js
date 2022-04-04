import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Service from '../screens/s-serv/Service';

const ServiceStackNavigator = () => {
    const SettingStack = createNativeStackNavigator();
    return (
        <SettingStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName=""
        >
            <SettingStack.Screen
                name="Service"
                component={Service}
            />
          
        </SettingStack.Navigator>
    );
}
export default ServiceStackNavigator;