import {View, Text} from 'react-native';
import React from 'react';
import {Button} from 'native-base';

interface DrawerButtonProps {
  title: string;
  onPress?: () => void;
}

export default function DrawerButton({title, onPress}: DrawerButtonProps) {
  return (
    <Button
      bg="#323C46"
      rounded="none"
      p={1.5}
      px={10}
      borderWidth={1}
      borderColor="#282832"
      _text={{fontFamily: 'SpoqaHanSansNeo-Regular', color: '#FFF'}}
      onPress={onPress}>
      {title}
    </Button>
  );
}
