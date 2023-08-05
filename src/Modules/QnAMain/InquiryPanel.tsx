import {Center, Divider, HStack} from 'native-base';
import {FontHeading} from '@src/Atomic/FontHeading';
import React from 'react';

export default function InquiryPanel() {
  return (
    <HStack
      mt={3}
      py={3}
      borderTopColor="black"
      borderTopWidth={2}
      borderBottomColor="#c3c3c3"
      borderBottomWidth={1}>
      <Center flex={1}>
        <FontHeading fontSize={14}>답변</FontHeading>
      </Center>
      <Divider orientation="vertical" />
      <Center flex={4}>
        <FontHeading fontSize={14}>제목</FontHeading>
      </Center>
    </HStack>
  );
}
