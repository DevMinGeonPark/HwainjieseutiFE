import React, {useCallback} from 'react';
import AdCopy from '@Atomic/AdCopy';
import LogoHeader from '@src/Atomic/Header/LogoHeader';
import SideBarButton from '@src/Atomic/Header/SideBarButton';
import NavigationBar from '@src/Modules/NavigationBar';
import UserInfo from './UserInfo';
import {HStack, Box} from 'native-base';
import {useUserState} from '@src/contexts/UserContext';
import {useLoginCheck} from '@src/hooks/useLoginCheck';
import {hasUserProperties} from '@src/Types/ContentTypes';

export default function Header() {
  const [user] = useUserState();

  return (
    <Box>
      <AdCopy />
      <LogoHeader />
      <HStack borderBottomWidth={1} borderTopWidth={1} borderColor="#CCC">
        <SideBarButton />
        <NavigationBar />
      </HStack>
      {hasUserProperties(user) && <UserInfo user={user} />}
    </Box>
  );
}
