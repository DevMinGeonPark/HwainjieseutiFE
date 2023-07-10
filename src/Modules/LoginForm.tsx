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
  NativeBaseProvider,
  Checkbox,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import {BASE_URL} from '@env';
import {encrypt} from '@Utils/Encrypt';
import {getKTShopKey} from '@src/Utils/KTShopKey';

export default function LoginForm() {
  const [ID, setID] = useState<string>('');
  const [PW, setPW] = useState<string>('');

  const login = async () => {
    console.log(getKTShopKey());
    console.log(encrypt(PW));

    // axios post header 설정
    const data = {
      KTShopID: ID,
      KTShopPW: encrypt(PW),
    };
    const headers = {
      'Content-Type': 'application/json',
      KTShopKey: getKTShopKey(),
    };

    try {
      const res = await axios.post(BASE_URL + 'login.php', data, {
        headers: headers,
      });
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box bg="gray.200" margin={6} borderRadius={20}>
      <Center w="100%">
        <Box safeArea w="90%" maxW="290">
          <Text style={{fontSize: 15, fontWeight: 'bold', marginLeft: 10}}>
            가입하신 아이디와 비밀번호를 입력해주세요.
          </Text>
          <VStack space={3} mt="5">
            <FormControl>
              <Input
                placeholder="아이디를 입력해주세요."
                backgroundColor="white"
                // value="gksrudgh3795"
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
                // value="ghkdls2012."
                type="password"
                InputRightElement={
                  <Icon style={{marginRight: 10}} name="lock" size={18} />
                }
                autoCapitalize="none"
                onChangeText={newStr => setPW(newStr)}
              />
            </FormControl>
            <Button onPress={() => login()} mt="2" backgroundColor={'dark.100'}>
              로그인
            </Button>
            <Checkbox value={'test'}>
              <Text>자동로그인</Text>
            </Checkbox>
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
