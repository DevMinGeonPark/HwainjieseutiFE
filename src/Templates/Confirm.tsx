import React from 'react';
import withCommontLayout from './withCommontLayout';
import PanelItem from '@src/Atomic/PanelItem';
import {Box, Button, Center, HStack, Input} from 'native-base';
import {FontText} from '@src/Atomic/FontText';
import {FontHeading} from '@src/Atomic/FontHeading';
import Icon from 'react-native-vector-icons/FontAwesome';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackScreenProps} from '@Types/NavigationTypes';
import {useNavigation} from '@react-navigation/native';
import useConfirmPW from '@hooks/queryHooks/useConfirmPW';
import {encrypt} from '@src/Utils/Encrypt';
import {useUserStore} from '@src/Store/userStore';

const Confirm = () => {
  const {user} = useUserStore();
  const navigation = useNavigation<StackNavigationProp<StackScreenProps>>();
  const confirmPassword = useConfirmPW();
  const [password, setPassword] = React.useState<string>('');

  const handleconfirmPW = async () => {
    try {
      await confirmPassword.mutateAsync({
        KTShopID: user?.UserId || '',
        KTShopPW: encrypt(password),
      });

      navigation.navigate('RegisterForm', {
        KTShopID: user?.UserId || '',
        UserNm: user?.UserNm || '',
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <PanelItem
        title="Confirm"
        icon="check-circle"
        titleSize={undefined}
        iconSize={undefined}
      />
      <Box bg="#EEEEEE" rounded={10} mx={3} my={5}>
        <Box p={4}>
          <Center p={3}>
            <HStack space={1} alignItems="center">
              <Icon name="lock" size={16} color="black" />
              <FontHeading fontSize={16}>회원 비밀번호 확인</FontHeading>
            </HStack>
          </Center>
          <FontHeading fontSize={14}>
            비밀번호를 한번 더 입력해주세요.
          </FontHeading>
          <FontText fontSize={12} my={1}>
            회원님의 정보를 안전하게 보호하기 위해 비밀번호를 한번 더
            확인합니다.
          </FontText>
          <HStack space={1} mt={2}>
            <FontHeading fontSize={12}>회원아이디:</FontHeading>
            <FontHeading fontSize={12} color="#428BCA">
              {user?.UserId}
            </FontHeading>
          </HStack>
          <Input
            mt={2}
            autoCapitalize="none"
            onChangeText={text => setPassword(text)} // 입력 시 비밀번호 상태 업데이트
            value={password} // Input의 값을 비밀번호 상태로 세팅
            InputRightElement={
              <Box mr={3}>
                <Icon name="lock" size={16} color="black" />
              </Box>
            }
            bg="#FFFFFF"
            secureTextEntry={true} // 비밀번호를 남들이 볼 수 없게 함
            type="password"
          />
          <Button
            mt={2}
            bg="#000000"
            _text={{color: '#FFFFFF'}}
            onPress={handleconfirmPW}>
            확인하기
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default withCommontLayout(Confirm);
