import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {Center} from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';

import {DrawerScreenProps} from '@Types/NavigationTypes';

export default function SideBarButton() {
  const navigation = useNavigation<DrawerNavigationProp<DrawerScreenProps>>();
  return (
    <Pressable onPress={() => navigation.openDrawer()}>
      <Center alignItems="center">
        <Icon name="menu" size={25} color="#37a09f" />
      </Center>
    </Pressable>
  );
}
