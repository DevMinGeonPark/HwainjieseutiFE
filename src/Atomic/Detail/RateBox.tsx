import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Box, Heading, Text, HStack, Center} from 'native-base';

interface RateBoxProps {
  Rate: number;
}

export default function RateBox({Rate}: RateBoxProps) {
  return (
    <Box m={3} bg={'#5ddfde'} mb={20}>
      <Center>
        <HStack alignItems="baseline" m={2}>
          <Text>(월)</Text>
          <Heading>
            {Rate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </Heading>
          <Text>원</Text>
        </HStack>
        <Text mb={3} fontSize={'md'}>
          부가세포함, 할부이자 별도
        </Text>
      </Center>
    </Box>
  );
}

const styles = StyleSheet.create({});
