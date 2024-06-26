import React, {memo} from 'react';
import AdCopy from '@Atomic/AdCopy';
import LogoHeader from '@src/Atomic/Header/LogoHeader';
import SideBarButton from '@src/Atomic/Header/SideBarButton';
import NavigationBar from '@src/Modules/NavigationBar';
import UserInfo from './UserInfo';
import {HStack, Box} from 'native-base';
import {useHeaderStore} from '@Store/headerStore';
import {useUserStore} from '@src/Store/userStore';

function Header() {
  const {user, hasUser} = useUserStore();
  const {isHeaderVisible} = useHeaderStore();

  // console.log('header 리로딩');

  return (
    <Box>
      {isHeaderVisible && <AdCopy />}
      {isHeaderVisible && <LogoHeader />}
      <HStack borderBottomWidth={1} borderTopWidth={1} borderColor="#CCC">
        <SideBarButton />
        <NavigationBar />
      </HStack>
      {isHeaderVisible && hasUser() && <UserInfo user={user} />}
    </Box>
  );
}

export default Header;
