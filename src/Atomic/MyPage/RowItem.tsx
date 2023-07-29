import React from 'react';
import {Flex} from 'native-base';
import {FontText} from '../FontText';

interface RowItemProps {
  text: string;
}

export default function RowItem({text}: RowItemProps) {
  return (
    <Flex flexGrow={1}>
      <FontText>{text}</FontText>
    </Flex>
  );
}
