import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Box, Heading} from 'native-base';

interface BoxTitleProps {
  title: string;
  borderWidth: number;
}

export default function BoxTitle({title, borderWidth}: BoxTitleProps) {
  return (
    <Box p={3} borderBottomColor={'#DDD'} borderBottomWidth={borderWidth}>
      <Heading size="md" fontSize={17}>
        {title}
      </Heading>
    </Box>
  );
}
