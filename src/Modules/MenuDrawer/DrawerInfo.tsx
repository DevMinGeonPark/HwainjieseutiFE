import {Box, Button, HStack, Progress} from 'native-base';
import {FontHeading} from '@src/Atomic/FontHeading';
import {FontText} from '@src/Atomic/FontText';
import React from 'react';
import {MemberInfoData} from '@src/Types/MemberInfoTypes';
import {NumberPreprocesser} from '@src/Utils/NumberPreprocesser';

interface DrawerInfoProps {
  memberInfo: MemberInfoData | undefined;
  handleAuth: () => void;
}

export default function DrawerInfo({memberInfo, handleAuth}: DrawerInfoProps) {
  return (
    <Box>
      <FontHeading size="md">{memberInfo?.UserNm}</FontHeading>
      <FontText fontSize={12} color="#777" my={2}>
        {memberInfo?.UserGrade}
      </FontText>
      <Progress
        size="lg"
        colorScheme="darkBlue"
        value={memberInfo?.UserLvUntilPer}
      />
      <HStack my={3} justifyContent="space-between">
        <FontText fontSize={12}>레벨{memberInfo?.UserLevel}</FontText>
        <FontText fontSize={12}>
          Exp{' '}
          {NumberPreprocesser(memberInfo?.UserLvUntilPoint?.toString() || '0')}(
          {memberInfo?.UserLvUntilPer}%)
        </FontText>
      </HStack>
      <Button size="sm" bg="coolGray.800" onPress={handleAuth}>
        로그아웃
      </Button>
    </Box>
  );
}
