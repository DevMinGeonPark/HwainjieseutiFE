import {View, Text} from 'react-native';
import {HStack, Spinner, Heading} from 'native-base';
import React from 'react';

export default function IsLoding() {
  return (
    <HStack space={2} justifyContent="center">
      <Spinner accessibilityLabel="Loading posts" />
      <Heading color="primary.500" fontSize="md">
        Loading
      </Heading>
    </HStack>
  );
}
