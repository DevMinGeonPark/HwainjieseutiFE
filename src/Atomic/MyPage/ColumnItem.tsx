import {Flex, Center} from 'native-base';
import React from 'react';
import {FontHeading} from '../FontHeading';

interface ColumnItemProps {
  title: string;
}

export default function ColumnItem({title}: ColumnItemProps) {
  return (
    <Flex
      bg="#333333"
      flexGrow={1}
      p={3}
      borderRightWidth={0.3}
      borderRightColor="#FAFAFA">
      <Center>
        <FontHeading fontSize={14} color="white">
          {title}
        </FontHeading>
      </Center>
    </Flex>
  );
}
