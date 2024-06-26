import React, {useState, memo} from 'react';
import {
  Box,
  VStack,
  FormControl,
  Input,
  Button,
  HStack,
  Center,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import useLogin from '@src/hooks/queryHooks/useLogin';
import {FontText} from '@src/Atomic/FontText';
import {Alert, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackScreenProps} from '@Types/NavigationTypes';
import {StackNavigationProp} from '@react-navigation/stack';
import useMemberInfoData from '@src/hooks/queryHooks/useMemberInfoData';
import useLog from '@src/hooks/useLog';

function LoginForm() {
  const [id, setID] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigation = useNavigation<StackNavigationProp<StackScreenProps>>();

  const {mutate: login} = useLogin({
    id: id,
    loginType: 'login',
  });

  const log = useLog('root');

  const onPressLogin = () => {
    // if (!id || !password) {
    //   Alert.alert('Error', '아이디와 비밀번호를 모두 입력해주세요.');
    // } else {
    // login({id, password});
    login({id: 'web366', password: '123456'});
    // navigation.navigate('Main');
    // }
  };

  return (
    <Box bg="gray.200" padding={6} margin={6} borderRadius={20}>
      <Center w="100%">
        <Box safeArea w="90%" maxW="290">
          <FontText style={{fontSize: 14, fontWeight: 'bold'}}>
            가입하신 아이디와 비밀번호를 입력해주세요.
          </FontText>
          <VStack space={3} mt="5">
            <FormControl>
              <Input
                placeholder="아이디를 입력해주세요."
                backgroundColor="white"
                InputRightElement={
                  <Icon style={{marginRight: 10}} name="user" size={18} />
                }
                autoCapitalize="none"
                onChangeText={newStr => setID(newStr)}
              />
            </FormControl>
            <FormControl>
              <Input
                placeholder="비밀번호를 입력해주세요."
                backgroundColor="white"
                type="password"
                InputRightElement={
                  <Icon style={{marginRight: 10}} name="lock" size={18} />
                }
                autoCapitalize="none"
                onChangeText={newStr => setPassword(newStr)}
              />
            </FormControl>
            <Button
              onPress={() => onPressLogin()}
              mt="2"
              backgroundColor={'dark.100'}>
              로그인
            </Button>
            <Pressable onPress={() => navigation.navigate('FindUser')}>
              <HStack justifyContent="flex-end">
                <Icon name="search" size={15} />
                <FontText> 정보찾기 </FontText>
              </HStack>
            </Pressable>
          </VStack>
        </Box>
      </Center>
    </Box>
  );
}

export default LoginForm;
