import {View, Text} from 'react-native';
import React from 'react';
import {Pressable} from 'native-base';
import {FontText} from '../FontText';
interface SortItemProps {
  title: string;
  onPress: () => void;
}

export default function SortItem({title, onPress}: SortItemProps) {
  return (
    <Pressable onPress={onPress}>
      <FontText color="#777">{title}</FontText>
    </Pressable>
  );
}
