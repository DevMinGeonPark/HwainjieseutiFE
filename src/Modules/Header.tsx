import React from 'react';
import AdCopy from '@Atomic/AdCopy';
import LogoHeader from '@src/Atomic/Header/LogoHeader';
import SideBarButton from '@src/Atomic/Header/SideBarButton';
import NavigationBar from '@src/Modules/NavigationBar';
import UserInfo from './UserInfo';
import {HStack} from 'native-base';
import {useUserState} from '@src/contexts/UserContext';
import {useLoginCheck} from '@src/hooks/useLoginCheck';
import {hasUserProperties} from '@src/Types/ContentTypes';

interface HeaderProps {
  showLogo: boolean;
}

export default function Header({showLogo}: HeaderProps) {
  const isLoggedIn = useLoginCheck();
  const [user] = useUserState();

  return (
    <>
      {showLogo && (
        <>
          <AdCopy />
          <LogoHeader />
        </>
      )}
      <HStack borderBottomWidth={1} borderTopWidth={1} borderColor="#CCC">
        <SideBarButton />
        <NavigationBar />
      </HStack>
      {isLoggedIn && showLogo && hasUserProperties(user) && (
        <UserInfo user={user} />
      )}
    </>
  );
}
