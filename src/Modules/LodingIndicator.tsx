import {View, Text} from 'react-native';
import {HStack, Spinner, Heading} from 'native-base';
import React from 'react';

export default function LodingIndicator() {
  return (
    <HStack space={2} justifyContent="center" marginTop={100}>
      <Spinner accessibilityLabel="Loading posts" />
      <Heading color="primary.500" fontSize="md">
        Loading
      </Heading>
    </HStack>
  );
}
