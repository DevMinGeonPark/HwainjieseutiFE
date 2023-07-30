import {Box, Center} from 'native-base';
import {FontHeading} from '@src/Atomic/FontHeading';
import React from 'react';

interface ToDetailButtonProps {
  isPressed: boolean;
}

export default function ToDetailButton({isPressed}: ToDetailButtonProps) {
  return (
    <Box
      mx={4}
      my={2}
      p={2}
      borderWidth={1}
      borderColor="#999"
      // bg="white"
      bg={isPressed ? 'rose.500' : 'white'}
      rounded="3xl">
      <Center>
        <FontHeading fontSize={12} color={isPressed ? 'white' : 'gray.500'}>
          자세히보기
        </FontHeading>
      </Center>
    </Box>
  );
}
