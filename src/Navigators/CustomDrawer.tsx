import {StyleSheet, Text, View} from 'react-native';
import {Progress, Heading, Divider, Button} from 'native-base';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import MenuItem from '@src/Atomic/Drawer/MenuItem';
import {useUserState} from '@src/contexts/UserContext';
import authStorage from '@src/Utils/authStorage';
import {useToast} from 'native-base';

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
      <View style={{margin: 15}}>
        <View>
          <Heading size="md">{user ? user.toString() : null}</Heading>
          <Text
            style={{
              fontSize: 12,
              color: '#777',
              marginTop: 10,
              marginBottom: 15,
            }}>
            실버
          </Text>
          <Progress size="lg" colorScheme="darkBlue" value={91.6} />
          <View style={{flexDirection: 'row', marginVertical: 10}}>
            <Text style={{flex: 1, textAlign: 'left'}}>레벨3</Text>
            <Text style={{flex: 1, textAlign: 'right'}}>Exp 3,200(91.6%)</Text>
          </View>
          <Button size="sm" bg="coolGray.800" onPress={() => handleAuth()}>
            로그아웃
          </Button>
        </View>
        <View>
          <View style={{width: 70, marginTop: 20, marginBottom: 10}}>
            <Heading size="xs">MY MENU</Heading>
            <Divider my="2" bg="muted.800" />
          </View>
        </View>
        <View style={{margin: 10}}>
          <MenuItem text="나의포인트" point="36497" />
          <MenuItem text="마이페이지" point={undefined} />
          <MenuItem text="정보수정" point={undefined} />
          <MenuItem text="탈퇴하기" point={undefined} />
          <MenuItem text="1:1문의" point={undefined} />
        </View>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({});
