import {View, Text} from 'react-native';
import React from 'react';
import {HStack, Center} from 'native-base';
import {FontHeading} from '../FontHeading';
import {FontText} from '../FontText';

export default function Copyrigth() {
  return (
    <Center>
      <HStack flexWrap="wrap">
        <FontHeading fontSize={14}>KT 공식몰©</FontHeading>
        <FontText fontSize={14}> All rights reserved.</FontText>
      </HStack>
    </Center>
  );
}
