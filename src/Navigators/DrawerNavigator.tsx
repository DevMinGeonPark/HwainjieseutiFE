import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import StackNavigator from './StackNavigator';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={StackNavigator}
        options={{drawerLabel: 'HOME'}}
      />
    </Drawer.Navigator>
  );
}
