import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Box, HStack, Text} from 'native-base';

interface NonLineLabelProps {
  label: string;
  Rate: number;
}

export default function NonLineLabel({label, Rate}: NonLineLabelProps) {
  return (
    <Box px={3} py={2}>
      <HStack justifyContent="space-between">
        <Text fontSize="md" color={'#AAA'}>
          {label}
        </Text>
        <Text fontSize="md" color={'#AAA'}>
          {Rate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' 원'}
        </Text>
      </HStack>
    </Box>
  );
}

const styles = StyleSheet.create({});
