import React from 'react';
import {Box, HStack} from 'native-base';
import {FontText} from '../FontText';
import {NumberPreprocesser} from '@Utils/NumberPreprocesser';

interface NonLineLabelProps {
  label: string;
  Rate: number;
}

export default function NonLineLabel({label, Rate}: NonLineLabelProps) {
  return (
    <Box px={3} py={2}>
      <HStack justifyContent="space-between">
        <FontText fontSize="md" color={'#AAA'}>
          {label}
        </FontText>
        <FontText fontSize="md" color={'#AAA'}>
          {NumberPreprocesser(Rate.toString()) + ' 원'}
        </FontText>
      </HStack>
    </Box>
  );
}
