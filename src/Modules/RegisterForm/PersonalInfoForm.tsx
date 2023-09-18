import {Box, VStack} from 'native-base';
import PanelItem from '@src/Atomic/PanelItem';
import FormItem from '@src/Atomic/FormItem';
import {useRoute} from '@react-navigation/native';
import {RegisterProps} from '@src/Types/NavigationTypes';
import BirthInput from '@src/Atomic/PersonalInfoForm/BirthInput';
import PhoneInput from '@src/Atomic/WriteQnA/PhoneInput';
import useLog from '@src/hooks/useLog';

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
  phoneCerti: boolean;
  setPhoneCerti: React.Dispatch<React.SetStateAction<boolean>>;
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
  phoneCerti,
  setPhoneCerti,
}: PersonalInfoFormProps) {
  const routeParams = useRoute().params as RegisterProps;
  const log = useLog('root');

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
          isCerti={false}
        />
        <PhoneInput
          title="휴대폰번호"
          value={phone}
          onChange={setPhone}
          onValidityChange={setIsValidPhone}
          isCerti={phoneCerti}
        />
      </VStack>
    </Box>
  );
}
