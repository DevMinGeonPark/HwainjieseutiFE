import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Box, Heading, Text, HStack} from 'native-base';

interface BoxLabelProps {
  label: string;
  Rate: number;
  fontColor: string;
}

export default function BoxLabel({label, Rate, fontColor}: BoxLabelProps) {
  return (
    <Box px={3} py={2} borderBottomColor={'#DDD'} borderBottomWidth={1}>
      <HStack justifyContent="space-between">
        <Text fontSize="md">{label}</Text>
        <Text
          fontSize="md"
          color={fontColor}
          fontWeight={fontColor === '#d71826' ? 'bold' : 'light'}>
          {Rate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' 원'}
        </Text>
      </HStack>
    </Box>
  );
}

const styles = StyleSheet.create({});
