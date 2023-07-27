// Circles.tsx
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {HStack, Circle, Center, VStack, Pressable} from 'native-base';

interface CircleProps {
  color: string[];
  size: number;
  onCirclePress: (index: number) => void;
}

export default function Circles({color, size, onCirclePress}: CircleProps) {
  const numInRow = 6;
  return (
    <Center marginY={3}>
      <VStack>
        {[...Array(Math.ceil(color.length / numInRow))].map((_, rowIndex) => (
          <HStack
            key={`row-${rowIndex}`}
            justifyContent={
              rowIndex * numInRow + numInRow > color.length &&
              color.length % numInRow !== 0
                ? 'flex-start'
                : 'center'
            }
            space={3}>
            {color
              .slice(rowIndex * numInRow, (rowIndex + 1) * numInRow)
              .map((item, index) => (
                <Pressable
                  key={index}
                  onPress={() => onCirclePress(rowIndex * numInRow + index)}>
                  <Circle size={size} bg={item} my={1} />
                </Pressable>
              ))}
          </HStack>
        ))}
      </VStack>
    </Center>
  );
}
