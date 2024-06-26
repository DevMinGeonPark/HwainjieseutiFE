import React from 'react';
import {Pressable, Platform, Alert} from 'react-native';
import {Center} from 'native-base';
import {StackNavigationProp} from '@react-navigation/stack';
import {FontText} from '../FontText';
import {useUserStore} from '@src/Store/userStore';

interface MenuButtonProps {
  navigation: StackNavigationProp<any>;
  screenName: string;
  menuText: string;
  params?: {
    MenuType: string;
    MenuVar: string;
    num: number;
    name: string;
  };
  currentName: string;
}

const MenuButton: React.FC<MenuButtonProps> = ({
  navigation,
  screenName,
  menuText,
  params,
  currentName,
}) => {
  return (
    <Pressable
      onPress={() => {
        navigation.navigate(screenName, params || {});
      }}>
      <Center>
        <FontText
          color={currentName === screenName ? '#37a09f' : '#000'}
          fontWeight={currentName === screenName ? 'bold' : 'normal'}
          fontSize={14}>
          {menuText}
        </FontText>
      </Center>
    </Pressable>
  );
};

export default MenuButton;
