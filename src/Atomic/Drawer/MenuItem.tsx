import React from 'react';
import {ChevronRightIcon, HStack} from 'native-base';
import {FontText} from '../FontText';
import {Box} from 'native-base';

interface props {
  text: string;
  point: string | undefined;
}
export default function MenuItem(params: props) {
  return (
    <Box my={1}>
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
    </Box>
  );
}
