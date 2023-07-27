import React from 'react';
import {Images} from '@assets/imgs/Images';
import Icon from 'react-native-vector-icons/FontAwesome';
import {StackScreenProps} from '@Types/NavigationTypes';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Center, Image, Pressable} from 'native-base';

export default function LogoHeader() {
  const navigation = useNavigation<StackNavigationProp<StackScreenProps>>();

  return (
    <Center>
      <Pressable width="150" onPress={() => navigation.navigate('Main')}>
        <Image
          width="100%"
          resizeMode="contain"
          alt="logo"
          source={Images.Logo.Logo}
        />
      </Pressable>
      <Pressable position="absolute" top={1} right={0} p={3}>
        <Icon name="search" size={20} color="#37a09f" />
      </Pressable>
    </Center>
  );
}
