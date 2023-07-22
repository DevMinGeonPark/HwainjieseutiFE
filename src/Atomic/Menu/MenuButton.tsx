import React from 'react';
import {Pressable} from 'react-native';
import {Center} from 'native-base';
import {StackNavigationProp} from '@react-navigation/stack';

interface MenuButtonProps {
  navigation: StackNavigationProp<any>;
  screenName: string;
  menuText: string;
  params: {
    MenuType: string;
    MenuVar: string;
  };
}

const MenuButton: React.FC<MenuButtonProps> = ({
  navigation,
  screenName,
  menuText,
  params,
}) => {
  return (
    <Pressable onPress={() => navigation.push(screenName, params)}>
      <Center
        p={3}
        _text={{
          fontSize: '14',
        }}>
        {menuText}
      </Center>
    </Pressable>
  );
};

export default MenuButton;
