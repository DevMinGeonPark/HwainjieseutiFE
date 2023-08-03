import {Box, Button, HStack, Progress} from 'native-base';
import {FontHeading} from '@src/Atomic/FontHeading';
import {FontText} from '@src/Atomic/FontText';
import React from 'react';
import {MemberInfoData} from '@src/Types/MemberInfoTypes';

interface DrawerInfoProps {
  memberInfo: MemberInfoData | undefined;
  handleAuth: () => void;
}

export default function DrawerInfo({memberInfo, handleAuth}: DrawerInfoProps) {
  // {
  //   "UserNm": "한경호", -> 이름
  //   "UserGrade": "실버", -> 등급
  //   "UserPoint": "4900", -> Exp랑 일치
  //   "UserLvUntilPoint": 1100,
  //   "UserLvUntilPer": 21.4,a
  //   "UserLevel": 5
  // }

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
          Exp {memberInfo?.UserLvUntilPoint}({memberInfo?.UserLvUntilPer}%)
        </FontText>
      </HStack>
      <Button size="sm" bg="coolGray.800" onPress={handleAuth}>
        로그아웃
      </Button>
    </Box>
  );
}
