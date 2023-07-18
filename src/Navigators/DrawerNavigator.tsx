import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {StackNavigator} from './StackNavigator';

import {DrawerScreenProps} from '@Types/NavigationTypes';
import CustomDrawer from './CustomDrawer';

const Drawer = createDrawerNavigator<DrawerScreenProps>();

export default function DrawerNavigator() {
  return (
    // swipre, header 제거
    <Drawer.Navigator
      initialRouteName="DrawerMain"
      screenOptions={{swipeEnabled: false, headerShown: false}}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="DrawerMain"
        component={StackNavigator}
        options={{drawerLabel: 'Main'}}
      />
    </Drawer.Navigator>
  );
}
