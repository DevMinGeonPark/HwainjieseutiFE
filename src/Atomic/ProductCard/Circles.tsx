import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {HStack, Circle, Center} from 'native-base';

interface CircleProps {
  color: string[];
}

export default function Circles({color}: CircleProps) {
  return (
    <Center marginY={3}>
      <HStack space={3}>
        {color?.map(item => (
          <Circle key={item.toString()} size="15px" bg={item.toString()} />
        ))}
      </HStack>
    </Center>
  );
}
