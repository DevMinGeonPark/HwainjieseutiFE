import {Progress, Divider, Button, HStack, Box} from 'native-base';
import React from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import MenuItem from '@src/Atomic/Drawer/MenuItem';
import {useUserState} from '@src/contexts/UserContext';
import authStorage from '@src/Utils/authStorage';
import {useToast} from 'native-base';
import {FontText} from '@src/Atomic/FontText';
import {FontHeading} from '@src/Atomic/FontHeading';

export default function CustomDrawer(props: any) {
  const [user, setUser] = useUserState();
  const Toast = useToast();

  const handleAuth = () => {
    if (user) {
      authStorage.clear();
      Toast.show({title: '로그아웃이 완료되었습니다.'});
      setUser(null);
    } else {
      Toast.show({title: '로그인이 되어있지 않습니다.'});
    }
  };
  return (
    <DrawerContentScrollView>
      <Box m={5}>
        <Box>
          <FontHeading size="md">{user ? user.toString() : null}</FontHeading>
          <FontText fontSize={12} color="#777" my={2}>
            실버
          </FontText>
          <Progress size="lg" colorScheme="darkBlue" value={91.6} />
          <HStack my={3} justifyContent="space-between">
            <FontText fontSize={12}>레벨3</FontText>
            <FontText fontSize={12}>Exp 3,200(91.6%)</FontText>
          </HStack>
          <Button size="sm" bg="coolGray.800" onPress={() => handleAuth()}>
            로그아웃
          </Button>
        </Box>
        <Box>
          <Box width={70} mt={6} mb={3}>
            <FontHeading size="xs">MY MENU</FontHeading>
            <Divider my="2" bg="muted.800" />
          </Box>
        </Box>
        <Box mx={3}>
          <MenuItem text="나의포인트" point="36497" />
          <MenuItem text="마이페이지" point={undefined} />
          <MenuItem text="정보수정" point={undefined} />
          <MenuItem text="탈퇴하기" point={undefined} />
          <MenuItem text="1:1문의" point={undefined} />
        </Box>
      </Box>
    </DrawerContentScrollView>
  );
}
