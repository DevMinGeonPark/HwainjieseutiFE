import React from 'react';
import AdCopy from '@Atomic/AdCopy';
import LogoHeader from '@Atomic/LogoHeader';
import SideBarButton from '@src/Atomic/SideBarButton';
import NavigationBar from '@src/Modules/NavigationBar';
import UserInfo from './UserInfo';
import {HStack} from 'native-base';
import {useUserState} from '@src/contexts/UserContext';

interface HeaderProps {
  showLogo: boolean;
}

export default function Header({showLogo}: HeaderProps) {
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
      {user && showLogo && <UserInfo />}
    </>
  );
}
