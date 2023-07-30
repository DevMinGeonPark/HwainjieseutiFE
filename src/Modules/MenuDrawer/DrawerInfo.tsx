import {Box, Button, HStack, Progress} from 'native-base';
import {FontHeading} from '@src/Atomic/FontHeading';
import {FontText} from '@src/Atomic/FontText';
import React from 'react';

interface DrawerInfoProps {
  UserNm: string;
  handleAuth: () => void;
}

export default function DrawerInfo({UserNm, handleAuth}: DrawerInfoProps) {
  return (
    <Box>
      <FontHeading size="md">{UserNm}</FontHeading>
      <FontText fontSize={12} color="#777" my={2}>
        실버
      </FontText>
      <Progress size="lg" colorScheme="darkBlue" value={91.6} />
      <HStack my={3} justifyContent="space-between">
        <FontText fontSize={12}>레벨3</FontText>
        <FontText fontSize={12}>Exp 3,200(91.6%)</FontText>
      </HStack>
      <Button size="sm" bg="coolGray.800" onPress={handleAuth}>
        로그아웃
      </Button>
    </Box>
  );
}
