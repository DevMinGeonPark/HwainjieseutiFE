import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import React from 'react';
import {Box, Center} from 'native-base';
import {FontHeading} from './FontHeading';

type Title = {
  title: string;
  desc: string;
};

export default function Title({title, desc}: Title) {
  const width = useWindowDimensions().width;

  return (
    <Box
      style={{
        marginBottom: 10,
      }}>
      <Center
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 50,
        }}>
        <FontHeading fontSize={30} zIndex={2}>
          {title}
        </FontHeading>
        <Box
          bg="#ffcd00"
          position="absolute"
          bottom={0}
          width={width - width / 2.5}
          height={4}
          zIndex={1}
        />
      </Center>
      <Center>
        <FontHeading fontSize={20} p={3}>
          {desc}
        </FontHeading>
      </Center>
    </Box>
  );
}
