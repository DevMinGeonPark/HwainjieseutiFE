import {Box} from 'native-base';
import React from 'react';
import {FontText} from '@src/Atomic/FontText';
import {useWindowDimensions} from 'react-native';

interface ItemProps {
  text: string;
  isBold: boolean;
}

export default function Item({text, isBold}: ItemProps) {
  const width = useWindowDimensions().width;
  return (
    <Box
      p={2}
      w={width / 3}
      borderBottomWidth={1}
      borderTopWidth={1}
      borderColor="#CCC">
      <FontText fontWeight={isBold ? 'bold' : 'normal'}>{text}</FontText>
    </Box>
  );
}
