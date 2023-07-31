import React from 'react';
import {Box, HStack, Center} from 'native-base';
import {FontText} from '../FontText';
import {FontHeading} from '../FontHeading';

interface RateBoxProps {
  Rate: number;
}

export default function RateBox({Rate}: RateBoxProps) {
  return (
    <Box m={3} bg={'#5ddfde'} mb={20}>
      <Center>
        <HStack alignItems="baseline" m={2}>
          <FontText>(월)</FontText>
          <FontHeading>
            {Rate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </FontHeading>
          <FontText>원</FontText>
        </HStack>
        <FontText mb={3} fontSize={'md'}>
          부가세포함, 할부이자 별도
        </FontText>
      </Center>
    </Box>
  );
}
