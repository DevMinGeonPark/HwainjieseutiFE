import React, {memo} from 'react';
import {FontText} from '@src/Atomic/FontText';
import {Center} from 'native-base';
import {NumberPreprocesser} from '@Utils/NumberPreprocesser';
import {User} from '@src/Types/ContentTypes';
import useLog from '@src/hooks/useLog';

interface UserInfoProps {
  user: User | null;
}

function UserInfo({user}: UserInfoProps) {
  const log = useLog('data');
  React.useEffect(() => {
    log.info('UserInfo 렌더링:', user);
  }, []);
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

export default UserInfo;
