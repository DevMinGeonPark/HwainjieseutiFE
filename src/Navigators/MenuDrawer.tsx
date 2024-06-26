import {Box, Button, VStack} from 'native-base';
import React, {useEffect} from 'react';
import MenuItem from '@src/Atomic/Drawer/MenuItem';

import authStorage from '@src/Utils/authStorage';
import {useToast} from 'native-base';
import DividerTitle from '@src/Atomic/Navigator/DividerTitle';
import DrawerInfo from '@src/Modules/MenuDrawer/DrawerInfo';
import DrawerLoginFrom from '@src/Modules/MenuDrawer/DrawerLoginFrom';
import useMemberInfoData from '@src/hooks/queryHooks/useMemberInfoData';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {PointSave} from '@src/API/MyPoint/PointSave';
import {Alert} from 'react-native';
import MenuItemModule from '@src/Modules/MenuDrawer/MenuItemModule';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackScreenProps} from '@Types/NavigationTypes';
import {useUserStore} from '@src/Store/userStore';

export default function MenuDrawer(props: any) {
  const {user, setUser, hasUser} = useUserStore();
  const Toast = useToast();

  const {data, refetch} = useMemberInfoData({
    KTShopID: user?.UserId || '',
  });
  const navigation = useNavigation<StackNavigationProp<StackScreenProps>>();

  const handlePointSave = React.useCallback(async () => {
    try {
      const savedPointResult = await PointSave({
        KTShopID: user?.UserId || '',
        PointType: 'Attend',
      });
      savedPointResult.result == 1
        ? Alert.alert('포인트가 적립되었습니다.')
        : Alert.alert('이미 적립된 포인트입니다.');
      refetch();
    } catch (error) {
      console.error('Error during point saving:', error);
    }
  }, [user]);

  const logOut = async () => {
    if (hasUser()) {
      navigation.navigate('Main');
      Toast.show({title: '로그아웃이 완료되었습니다.'});
      await authStorage.clear();
      await setUser(null);
    }
  };

  if (!hasUser())
    return (
      <Box safeArea m={5}>
        <DrawerLoginFrom />
        <DividerTitle title="MY MENU" fontSize={14} />
        <MenuItem
          text="회원가입"
          point={undefined}
          onPress={() => {
            navigation.navigate('WebRegister');
          }}
        />
        <MenuItem
          text="아이디/비밀번호 찾기"
          point={undefined}
          onPress={() => navigation.navigate('FindUser')}
        />
      </Box>
    );

  return (
    <Box safeArea m={5}>
      <DrawerInfo memberInfo={data} handleAuth={logOut} />
      <DividerTitle title="MY MENU" fontSize={14} />
      <MenuItemModule point={data?.UserPoint} />
      <VStack mt={10}>
        <Button
          leftIcon={<Icon name="coins" size={15} color="black" />}
          _text={{color: 'black'}}
          variant="ghost"
          onPress={() => {
            handlePointSave();
          }}>
          출석 포인트 받기
        </Button>
        <Button
          leftIcon={<Icon name="redo-alt" size={15} color="black" />}
          _text={{color: 'black'}}
          variant="ghost"
          onPress={() => {
            refetch();
            Toast.show({title: '포인트가 새로고침 되었습니다.'});
          }}>
          포인트 새고로침
        </Button>
      </VStack>
    </Box>
  );
}
