import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Search from '../screens/s_search/Search';
import Manager_P from '../screens/s_search/Manager_P';

const SearchStackNavigator = () => {
    const SettingStack = createNativeStackNavigator();
    return (
        <SettingStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName="Search"
        >
            <SettingStack.Screen
                name="Search"
                component={Search}
            />
              <SettingStack.Screen
                name="Manager_P"
                component={Manager_P}
            />
          
        </SettingStack.Navigator>
    );
}
export default SearchStackNavigator;