import React from 'react';
import AdCopy from '@Atomic/AdCopy';
import LogoHeader from '@src/Atomic/Header/LogoHeader';
import SideBarButton from '@src/Atomic/Header/SideBarButton';
import NavigationBar from '@src/Modules/NavigationBar';
import UserInfo from './UserInfo';
import {HStack} from 'native-base';
import {useUserState} from '@src/contexts/UserContext';
import {useLoginCheck} from '@src/hooks/useLoginCheck';

interface HeaderProps {
  showLogo: boolean;
}

export default function Header({showLogo}: HeaderProps) {
  const isLoggedIn = useLoginCheck();

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
      {isLoggedIn && showLogo && <UserInfo />}
    </>
  );
}
