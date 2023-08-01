import React from 'react';
import {Images} from '@assets/imgs/Images';
import Icon from 'react-native-vector-icons/FontAwesome';
import {StackScreenProps} from '@Types/NavigationTypes';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Center, Image, Pressable} from 'native-base';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {DrawerScreenProps} from '@Types/NavigationTypes';
import {useDrawerState} from '@src/contexts/DrawerStateContext';

export default function LogoHeader() {
  const stackNavigation =
    useNavigation<StackNavigationProp<StackScreenProps>>();
  const drawerNavigation =
    useNavigation<DrawerNavigationProp<DrawerScreenProps>>();

  const [, setDrawerType] = useDrawerState();

  return (
    <Center>
      <Pressable width="150" onPress={() => stackNavigation.navigate('Main')}>
        <Image
          width="100%"
          resizeMode="contain"
          alt="logo"
          source={Images.Logo.Logo}
        />
      </Pressable>
      <Pressable
        position="absolute"
        top={1}
        right={0}
        p={3}
        onPress={() => {
          setDrawerType(false);
          drawerNavigation.openDrawer();
        }}>
        <Icon name="search" size={20} color="#37a09f" />
      </Pressable>
    </Center>
  );
}
