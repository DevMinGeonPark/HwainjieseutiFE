import {HStack} from 'native-base';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {FontHeading} from '@src/Atomic/FontHeading';

export default function AnswerPanel() {
  const size = 14;
  return (
    <HStack
      my={4}
      p={3}
      space={1}
      bg="#FAFAFA"
      borderWidth={1}
      borderColor="#CCC"
      alignItems="center">
      <Icon name="comment" size={size} color="black" />
      <FontHeading fontSize={size}>Answer</FontHeading>
    </HStack>
  );
}
