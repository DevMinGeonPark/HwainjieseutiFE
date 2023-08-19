import {Box, Center, HStack, Text} from 'native-base';
import React from 'react';
import {FontText} from '@src/Atomic/FontText';
import {StyleSheet} from 'react-native';
import Item from './Item';

const Names: React.FC = () => {
  const items = ['목적', '항목', '보유기간'];
  return (
    <HStack>
      {items.map((i, index) => (
        <Item key={index} text={i} isBold={true} />
      ))}
      {/* <Item text="목적" isBold={true} />
      <Item text="항목" isBold={true} />
      <Item text="보유기간" isBold={true} /> */}
    </HStack>
  );
};
export default Names;
