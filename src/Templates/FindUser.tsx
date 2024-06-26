import {Box, Button, FormControl, Input, VStack, useToast} from 'native-base';
import React from 'react';
import withCommontLayout from './withCommontLayout';
import {FontText} from '@src/Atomic/FontText';
import PanelItem from '@src/Atomic/PanelItem';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import {StackScreenProps} from '@Types/NavigationTypes';
import {StackNavigationProp} from '@react-navigation/stack';
import {Alert} from 'react-native';
import Layout from '@src/Modules/Layout';

interface FindUserData {
  error: string;
  message: string;
}

const FindUser = () => {
  const [id, setId] = React.useState<string>('');
  const [phone, setPhone] = React.useState<string>('');
  const toast = useToast();
  const navigation = useNavigation<StackNavigationProp<StackScreenProps>>();

  // 전화번호 입력시 자동으로 하이픈이 추가되도록 onchange 함수를 수정합니다.
  const onChangePhone = (text: string) => {
    const formattedText = text.replace(/[^0-9]/g, ''); // 숫자 이외의 문자를 모두 제거합니다.
    setPhone(formattedText);
  };

  const handleFindPw = async () => {
    try {
      const res = await axios.get(
        `https://kt-online.shop/bbs/password_lost_sms.php?mb_name=${id}&mb_hp=${phone}`,
      );

      const data: FindUserData = res.data;
      if (data.error === '0') {
        toast.show({
          title: '아이디, 비밀번호를 전송해드렸습니다.',
        });
        navigation.navigate('Login');
      } else {
        throw new Error(data.message); //error 헨들링
      }
    } catch (error) {
      error instanceof Error && Alert.alert('에러 발생', error.message);
    }
  };

  return (
    <Layout>
      <PanelItem
        title="Find PW"
        icon="file-text"
        titleSize={undefined}
        iconSize={undefined}
      />
      <VStack m={10} space={3}>
        <FormControl>
          <FormControl.Label _text={{color: 'muted.700', fontSize: 'sm'}}>
            이름
          </FormControl.Label>
          <Input
            autoCapitalize="none"
            value={id}
            onChangeText={text => setId(text)}
            type="text"
          />
        </FormControl>
        <FormControl>
          <FormControl.Label _text={{color: 'muted.700', fontSize: 'sm'}}>
            본인명의 휴대전화
          </FormControl.Label>
          <Input
            autoCapitalize="none"
            value={phone}
            onChangeText={onChangePhone}
            type="text"
            keyboardType="numeric" // 숫자만 입력 가능하도록 키패드를 변경합니다.
          />
          <FormControl.HelperText>
            전화번호는 010-1234-5678 형식으로 입력해주세요.
          </FormControl.HelperText>
        </FormControl>
        <Button
          mt={5}
          mx={3}
          bg="#333333"
          borderWidth={1}
          borderColor="black"
          size="xs"
          _text={{fontSize: 14, fontWeight: 'bold', color: 'white'}}
          onPress={handleFindPw}>
          비밀번호 찾기
        </Button>
      </VStack>
    </Layout>
  );
};

// export default withCommontLayout(FindUser);
export default FindUser;
