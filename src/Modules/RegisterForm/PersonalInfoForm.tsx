import react from 'react';
import {Box, Button, HStack, VStack} from 'native-base';
import PanelItem from '@src/Atomic/PanelItem';
import FormItem from '@src/Atomic/FormItem';
import {FontText} from '@src/Atomic/FontText';
import {Linking} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {RegisterProps} from '@src/Types/NavigationTypes';
import BirthInput from '@src/Atomic/PersonalInfoForm/BirthInput';
import PhoneInput from '@src/Atomic/WriteQnA/PhoneInput';

interface PersonalInfoFormProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  birth: string;
  setBirth: React.Dispatch<React.SetStateAction<string>>;
  phone: string;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
  activatePhone: string;
  setActivatePhone: React.Dispatch<React.SetStateAction<string>>;
  setIsValidBirth: React.Dispatch<React.SetStateAction<boolean>>;
  setIsValidPhone: React.Dispatch<React.SetStateAction<boolean>>;
  setIsValidActivatePhone: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function PersonalInfoForm({
  name,
  setName,
  birth,
  setBirth,
  phone,
  setPhone,
  activatePhone,
  setActivatePhone,
  setIsValidBirth,
  setIsValidPhone,
  setIsValidActivatePhone,
}: PersonalInfoFormProps) {
  const routeParams = useRoute().params as RegisterProps;
  return (
    <Box
      mt={6}
      pb={5}
      borderTopColor="#CCC"
      borderTopWidth={1}
      borderBottomWidth={1}>
      <PanelItem
        title="개인정보 입력"
        icon="user"
        titleSize={14}
        iconSize={14}
      />
      <VStack p={3} space={3}>
        <FormItem
          title="이름"
          isDisabled={routeParams?.UserNm ? true : false}
          type="text"
          icon="check"
          text={name}
          setText={setName}
        />
        {/* <HStack space={1} mx={3} mb={2}>
        <Button size="sm" bg="black">
          아이핀 본인확인
        </Button>
        <Button
          size="sm"
          bg="black"
          onPress={() => {
            Linking.openURL(
              'https://www.sktpass.com/applink/sktauth?agentTID=V49440000000&appToken=1234',
            );
          }}>
          휴대폰 본인확인
        </Button>
      </HStack> */}
        <FontText fontSize={12} px={3} color="#777777">
          아이핀 본인확인 후에는 이름이 자동 입력되고 휴대폰 본인확인 후에는
          이름과 휴대폰번호가 자동 입력되어 수동으로 입력할수 없게 됩니다.
        </FontText>
        <BirthInput
          text={birth}
          setText={setBirth}
          setIsValidBirth={setIsValidBirth}
        />
        <PhoneInput
          title="전화번호(개통번호)"
          value={activatePhone}
          onChange={setActivatePhone}
          onValidityChange={setIsValidActivatePhone}
        />
        <PhoneInput
          title="휴대폰번호"
          value={phone}
          onChange={setPhone}
          onValidityChange={setIsValidPhone}
        />
      </VStack>
    </Box>
  );
}
