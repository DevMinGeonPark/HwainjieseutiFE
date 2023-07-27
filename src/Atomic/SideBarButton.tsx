import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Center, Pressable} from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';

import {DrawerScreenProps} from '@Types/NavigationTypes';

export default function SideBarButton() {
  const navigation = useNavigation<DrawerNavigationProp<DrawerScreenProps>>();
  return (
    <Pressable
      onPress={() => navigation.openDrawer()}
      borderRightWidth={1}
      p={3}
      borderColor="#CCC">
      <Center alignItems="center">
        <Icon name="menu" size={25} color="#37a09f" />
      </Center>
    </Pressable>
  );
}
