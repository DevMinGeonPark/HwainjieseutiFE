import React from 'react';
import {ChevronRightIcon, HStack, Pressable} from 'native-base';
import {FontText} from '../FontText';
import {Box} from 'native-base';

interface props {
  text: string;
  point?: string;
  onPress: () => void;
}
export default function MenuItem(params: props) {
  return (
    <Pressable my={1} onPress={params.onPress}>
      <HStack
        borderBottomColor={'#eee'}
        borderBottomWidth={1}
        pb={1}
        justifyContent="space-between">
        <FontText>{params.text}</FontText>
        {params.point === undefined ? (
          <ChevronRightIcon size={3} />
        ) : (
          <FontText>{params.point}점</FontText>
        )}
      </HStack>
    </Pressable>
  );
}
