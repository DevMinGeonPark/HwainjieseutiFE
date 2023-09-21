import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {Box, Center, Heading, HStack, Spacer} from 'native-base';
import {FontText} from '../FontText';
import {NumberPreprocesser} from '@Utils/NumberPreprocesser';

interface BoxLabelProps {
  label: string;
  Rate: number;
  fontColor: string;
  fontWeight?: string;
}

export default function BoxLabel({
  label,
  Rate,
  fontColor,
  fontWeight,
}: BoxLabelProps) {
  return (
    <Box px={3} py={2} borderBottomColor={'#DDD'} borderBottomWidth={1}>
      <HStack>
        <FontText fontSize="17px">{label}</FontText>
        <Spacer />
        <FontText fontSize="17px" color={fontColor} fontWeight={fontWeight}>
          {fontColor === '#d71826' && Rate != 0 ? '-' : ''}
          {NumberPreprocesser(Rate)}
        </FontText>
        <FontText fontSize="17px" color={fontColor} fontWeight={fontWeight}>
          {' '}
          원
        </FontText>
      </HStack>
    </Box>
  );
}

const styles = StyleSheet.create({});
