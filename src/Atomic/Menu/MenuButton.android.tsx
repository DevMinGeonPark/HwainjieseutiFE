import React from 'react';
import {Pressable, Platform, Alert} from 'react-native';
import {Center} from 'native-base';
import {StackNavigationProp} from '@react-navigation/stack';
import {FontText} from '../FontText';
import {useLoginCheck} from '@src/hooks/useLoginCheck';
import {useUserState} from '@src/contexts/UserContext';
import {hasUserProperties} from '@src/Types/ContentTypes';

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
  const [user] = useUserState();

  return (
    <Pressable
      onPress={() => {
        if (hasUserProperties(user)) {
          navigation.navigate(screenName, params || {});
        } else {
          Alert.alert('로그인이 필요합니다.', '', [
            {text: 'OK', onPress: () => navigation.navigate('Login')},
          ]);
        }
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
