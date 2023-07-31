import React from 'react';
import {Center, Pressable} from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';

import {DrawerScreenProps} from '@Types/NavigationTypes';
import {useDrawerState} from '@src/contexts/DrawerStateContext';

export default function SideBarButton() {
  const navigation = useNavigation<DrawerNavigationProp<DrawerScreenProps>>();
  const [, setDrawerType] = useDrawerState();
  return (
    <Pressable
      onPress={() => {
        setDrawerType(true);
        navigation.dispatch(DrawerActions.openDrawer());
      }}
      borderRightWidth={1}
      p={3}
      borderColor="#CCC">
      <Center alignItems="center">
        <Icon name="menu" size={25} color="#37a09f" />
      </Center>
    </Pressable>
  );
}
