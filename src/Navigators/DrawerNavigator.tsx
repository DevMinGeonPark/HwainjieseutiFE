import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {StackNavigator} from './_StackNavigator.ios';
import {DrawerScreenProps} from '@Types/NavigationTypes';
import {useDrawerState} from '@src/contexts/DrawerStateContext';
import MenuDrawer from './MenuDrawer';
import SearchDrawer from './SearchDrawer';

const Drawer = createDrawerNavigator<DrawerScreenProps>();

export default function DrawerNavigator() {
  const [drawerType] = useDrawerState();

  return (
    // swipre, header 제거
    <Drawer.Navigator
      initialRouteName="DrawerMain"
      screenOptions={{swipeEnabled: false, headerShown: false}}
      drawerContent={props =>
        drawerType ? <MenuDrawer {...props} /> : <SearchDrawer {...props} />
      }>
      <Drawer.Screen
        name="DrawerMain"
        component={StackNavigator}
        options={{drawerLabel: 'Main'}}
      />
    </Drawer.Navigator>
  );
}
