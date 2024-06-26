import {Button, FormControl, Input, VStack} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, {useState} from 'react';
import useLogin from '@src/hooks/queryHooks/useLogin';
import {Alert} from 'react-native';
import useMemberInfoData from '@src/hooks/queryHooks/useMemberInfoData';

export default function DrawerLoginFrom() {
  const [id, setID] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const {mutate: login, isLoading: loginLoading} = useLogin({
    id: id,
    loginType: 'drawer',
  });

  // const {refetch} = useMemberInfoData({
  //   KTShopID: id || '',
  // });

  const onPressLogin = () => {
    if (loginLoading) return;

    if (!id || !password) {
      Alert.alert('Error', '아이디와 비밀번호를 모두 입력해주세요.');
      return;
    }

    login({id, password});
    // refetch();
  };

  return (
    <VStack space={3}>
      <FormControl>
        <Input
          placeholder="아이디"
          backgroundColor="white"
          onChangeText={newStr => setID(newStr)}
          autoCapitalize="none"
          InputLeftElement={
            <Button
              variant={'ghost'}
              rounded="none"
              borderRightColor="muted.300"
              borderRightWidth={1}
              bg="#eeeeee">
              <Icon name="user" size={15} color="black" />
            </Button>
          }
        />
      </FormControl>
      <FormControl>
        <Input
          placeholder="비밀번호"
          backgroundColor="white"
          autoCapitalize="none"
          type="password"
          onChangeText={newStr => setPassword(newStr)}
          InputLeftElement={
            <Button
              variant={'ghost'}
              rounded="none"
              borderRightColor="muted.300"
              borderRightWidth={1}
              bg="#eeeeee">
              <Icon name="lock" size={15} color="black" />
            </Button>
          }
        />
      </FormControl>
      <Button onPress={() => onPressLogin()} backgroundColor={'dark.100'}>
        로그인
      </Button>
    </VStack>
  );
}
