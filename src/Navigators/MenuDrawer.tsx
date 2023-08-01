import {Box} from 'native-base';
import React from 'react';
import MenuItem from '@src/Atomic/Drawer/MenuItem';
import {useUserState} from '@src/contexts/UserContext';
import authStorage from '@src/Utils/authStorage';
import {useToast} from 'native-base';
import DividerTitle from '@src/Atomic/Navigator/DividerTitle';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackScreenProps} from '@Types/NavigationTypes';
import DrawerInfo from '@src/Modules/MenuDrawer/DrawerInfo';
import DrawerLoginFrom from '@src/Modules/MenuDrawer/DrawerLoginFrom';
import {useLoginCheck} from '@src/hooks/useLoginCheck';

export default function MenuDrawer(props: any) {
  const [user, setUser] = useUserState();
  const Toast = useToast();
  const navigation = useNavigation<StackNavigationProp<StackScreenProps>>();
  const isLoggedIn = useLoginCheck();

  const handleAuth = () => {
    if (user) {
      authStorage.clear();
      Toast.show({title: '로그아웃이 완료되었습니다.'});
      setUser(null);
    } else {
      Toast.show({title: '로그인이 되어있지 않습니다.'});
    }
  };

  if (!isLoggedIn)
    return (
      <Box safeArea m={5}>
        <DrawerLoginFrom />
        <DividerTitle title="MY MENU" fontSize={14} />
        <MenuItem text="회원가입" point={undefined} onPress={() => {}} />
        <MenuItem
          text="아이디/비밀번호 찾기"
          point={undefined}
          onPress={() => {}}
        />
      </Box>
    );

  return (
    <Box safeArea m={5}>
      <DrawerInfo UserNm={user?.UserNm || ''} handleAuth={handleAuth} />
      <DividerTitle title="MY MENU" fontSize={14} />
      <Box mx={3}>
        <MenuItem
          text="나의포인트"
          point="36497"
          onPress={() => {
            navigation.navigate('MyPoint');
          }}
        />
        <MenuItem
          text="마이페이지"
          point={undefined}
          onPress={() => {
            navigation.navigate('MyPage');
          }}
        />
        <MenuItem
          text="정보수정"
          point={undefined}
          onPress={() => {
            navigation.navigate('Confirm');
          }}
        />
        <MenuItem text="탈퇴하기" point={undefined} onPress={() => {}} />
        <MenuItem
          text="1:1문의"
          point={undefined}
          onPress={() => {
            navigation.navigate('CustomerInquiry');
          }}
        />
      </Box>
    </Box>
  );
}
