import react, {useState} from 'react';
import {Box, Button, HStack, VStack} from 'native-base';
import PanelItem from '@src/Atomic/PanelItem';
import FormItem from '@src/Atomic/FormItem';
import {FontText} from '@src/Atomic/FontText';
import {Alert, Linking} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {RegisterProps} from '@src/Types/NavigationTypes';
import BirthInput from '@src/Atomic/PersonalInfoForm/BirthInput';
import PhoneInput from '@src/Atomic/WriteQnA/PhoneInput';
import EmailInput from '@src/Atomic/WriteQnA/EmailInput';
import CertificationNumber from '@src/Modules/CertificationNumber';
import auth from '@react-native-firebase/auth';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import useLog from '@src/hooks/useLog';
import {useRegisterForm} from '@src/hooks/stateHooks/useRegisterForm';

// interface PersonalInfoFormProps {
//   name: string;
//   setName: React.Dispatch<React.SetStateAction<string>>;
//   birth: string;
//   setBirth: React.Dispatch<React.SetStateAction<string>>;
//   phone: string;
//   setPhone: React.Dispatch<React.SetStateAction<string>>;
//   activatePhone: string;
//   setActivatePhone: React.Dispatch<React.SetStateAction<string>>;
//   email: string;
//   setEmail: React.Dispatch<React.SetStateAction<string>>;
//   setIsValidBirth: React.Dispatch<React.SetStateAction<boolean>>;
//   setIsValidPhone: React.Dispatch<React.SetStateAction<boolean>>;
//   setIsValidActivatePhone: React.Dispatch<React.SetStateAction<boolean>>;
//   setIsValidEmail: React.Dispatch<React.SetStateAction<boolean>>;
// }

export default function PersonalInfoForm() {
  const routeParams = useRoute().params as RegisterProps;
  const [showModal, setShowModal] = useState<boolean>(false);
  const [phoneCerti, setPhoneCerti] = useState<boolean>(false);

  const {
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
  } = useRegisterForm(routeParams);

  const [confirm, setConfirm] =
    useState<FirebaseAuthTypes.ConfirmationResult>();

  const [code, setCode] = useState<string>('');

  const phoneAuth = async (phoneNumber: string) => {
    auth().settings.forceRecaptchaFlowForTesting = true;

    if (phoneNumber === '') {
      Alert.alert('전화번호가 입력되지않았습니다.');
      return;
    }

    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
      setShowModal(true); //모달 띄우기
    } catch (e) {
      const error = e as FirebaseAuthTypes.NativeFirebaseAuthError;
      if (error.code === 'auth/invalid-phone-number') {
        Alert.alert('휴대전화 번호가 이상합니다. 다시 입력해주세요.');
      } else if (error.code === 'auth/too-many-requests') {
        // 너무 많은 요청으로 인한 경우 처리
        Alert.alert('요청이 너무 많습니다. 잠시 후 다시 시도해주세요.');
        console.log(error.message);
      } else {
        // 그 외의 경우
        Alert.alert(
          '예기치 않은 오류가 발생했습니다: 관리자에게 해당 코드를 전달해주세요.',
          error.code,
        );
      }
    }
  };

  async function confirmCode() {
    try {
      let data = await confirm?.confirm(code);
      console.log(data);
    } catch (e) {
      const error = e as FirebaseAuthTypes.NativeFirebaseAuthError;
      console.log(error.code);
      console.log(error.message);
    }
  }
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
        {/* <EmailInput
          value={email}
          onChange={setEmail}
          onValidityChange={setIsValidEmail}
        />
        <Button size="sm" bg="black">
          Email 인증
        </Button>
        <FontText fontSize={12} px={3} color="#777777">
          이메일 본인인증은 차후 계정을 찾는데 이용됩니다.
        </FontText> */}
        <PhoneInput
          title="휴대폰번호"
          value={phone}
          onChange={setPhone}
          onValidityChange={setIsValidPhone}
          isCerti={phoneCerti}
        />
        {!phoneCerti && (
          <Button
            size="sm"
            bg="black"
            onPress={() => {
              phoneAuth(phone.replace(/^0/, '+82'));
              setIsValidPhone(true);
            }}>
            휴대전화 인증
          </Button>
        )}
      </VStack>
      <CertificationNumber
        showModal={showModal}
        setShowModal={setShowModal}
        confirmCode={confirmCode}
        code={code}
        setCode={setCode}
        setPhoneCerti={setPhoneCerti}
      />
    </Box>
  );
}
