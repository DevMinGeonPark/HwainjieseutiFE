import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
  Center,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import useLogin from '@src/hooks/queryHooks/useLogin';

export default function LoginForm() {
  const [id, setID] = useState<string>('gksrudgh3795');
  const [password, setPassword] = useState<string>('ghkdls2012.');

  const {mutate: login, isLoading: loginLoading} = useLogin(id);

  const onPressLogin = () => {
    if (loginLoading) {
      return;
    }
    login({id, password});
  };

  return (
    <Box bg="gray.200" padding={6} margin={6} borderRadius={20}>
      <Center w="100%">
        <Box safeArea w="90%" maxW="290">
          <Text style={{fontSize: 14, fontWeight: 'bold'}}>
            가입하신 아이디와 비밀번호를 입력해주세요.
          </Text>
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
            <HStack justifyContent="flex-end">
              <Icon name="search" size={15} />
              <Text> 정보찾기 </Text>
            </HStack>
          </VStack>
        </Box>
      </Center>
    </Box>
  );
}

const styles = StyleSheet.create({});
