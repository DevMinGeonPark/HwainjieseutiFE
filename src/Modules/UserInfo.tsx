import React from 'react';
import {useUserState} from '@src/contexts/UserContext';
import {FontText} from '@src/Atomic/FontText';
import {Center} from 'native-base';
import {NumberPreprocesser} from '@Utils/NumberPreprocesser';
import {User} from '@src/Types/ContentTypes';

interface UserInfoProps {
  user: User | null;
}

export default function UserInfo({user}: UserInfoProps) {
  return (
    <Center p={3} borderBottomColor="#333" borderBottomWidth={2}>
      <FontText fontSize={14} color="#666">
        {`${user?.UserNm}님이 보유하신 포인트: ${NumberPreprocesser(
          user?.Point?.toString() || '0',
        )} Point 입니다.`}
      </FontText>
    </Center>
  );
}
