import {VStack} from 'native-base';
import React from 'react';
import {FontText} from '@src/Atomic/FontText';

interface FixBarLabelProps {
  Title: string;
  Rate: number;
}

export default function FixBarLabel({Title, Rate}: FixBarLabelProps) {
  return (
    <VStack>
      <FontText fontSize={12} color={'white'}>
        {Title}
      </FontText>
      <FontText fontSize={15} fontWeight="bold" color={'white'}>
        {Rate + ' 원'}
      </FontText>
    </VStack>
  );
}
