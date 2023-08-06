import React, {useContext, useState} from 'react';
import PanelItem from '@src/Atomic/PanelItem';
import {Box, Button, HStack} from 'native-base';
import withCommontLayout from './withCommontLayout';
import SiteInfoForm from '@src/Modules/RegisterForm/SiteInfoForm';
import {useUserState} from '@src/contexts/UserContext';
import PersonalInfoForm from '@src/Modules/RegisterForm/PersonalInfoForm';
import MorePersonalSettingForm from '@src/Modules/RegisterForm/MorePersonalSettingForm';
import {Alert} from 'react-native';
import {encrypt} from '@src/Utils/Encrypt';
import {useRoute} from '@react-navigation/native';
import {RegisterProps} from '@src/Types/NavigationTypes';
import {ScrollViewContext} from '@src/contexts/ScrollViewContext';
import useUpdateMember from '@src/hooks/queryHooks/useUpdateMember';
import {ParamProps} from '@src/Types/MemberTypes';
import useCreateMember from '@src/hooks/queryHooks/useCreateMember';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackScreenProps} from '@Types/NavigationTypes';
import {useNavigation} from '@react-navigation/native';

const RegisterForm = () => {
  const routeParams = useRoute().params as RegisterProps;

  const navigation = useNavigation<StackNavigationProp<StackScreenProps>>();
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [id, setId] = useState<string>(routeParams.KTShopID || '');
  const [name, setName] = useState<string>(routeParams.UserNm || '');
  const [birth, setBirth] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [activatePhone, setActivatePhone] = useState<string>('');

  const [isValidBirth, setIsValidBirth] = React.useState(false);
  const [isValidPhone, setIsValidPhone] = React.useState(false);
  const [isValidActivatePhone, setIsValidActivatePhone] = React.useState(false);
  const [maling, setMaling] = useState<number>(1);
  const [openInfo, setOpenInfo] = useState<number>(1);

  const updateMember = useUpdateMember();
  const createMember = useCreateMember();

  const {scrollViewRef} = useContext(ScrollViewContext);

  const handleSummit = async () => {
    if (password !== confirmPassword) {
      Alert.alert('비밀번호가 일치하지 않습니다.');
      scrollViewRef?.current?.scrollTo({x: 0, y: 0, animated: true});
    } else if (!isValidBirth) {
      Alert.alert('생년월일을 확인해주세요.');
    } else if (!isValidPhone) {
      Alert.alert('휴대폰 번호를 확인해주세요.');
    } else if (!isValidActivatePhone) {
      Alert.alert('개통번호를 확인해주세요.');
    } else {
      console.log(password);
      const param: ParamProps = {
        KTShopID: id,
        UserName: name,
        UserPW: encrypt(password),
        UserBirth: birth,
        UserOpenHp: activatePhone,
        UserHp: '01012345678',
        Maling: maling,
        OpenInfo: openInfo,
      };
      if (routeParams?.KTShopID) {
        await updateMember.mutateAsync(param);
      } else {
        await createMember.mutateAsync(param);
      }
      navigation.navigate('Main');
    }
  };

  return (
    <Box>
      <PanelItem
        title="Register Form"
        icon="file-text"
        titleSize={undefined}
        iconSize={undefined}
      />
      <SiteInfoForm
        id={id}
        setId={setId}
        password={password}
        setPassword={setPassword}
        confirmPassword={confirmPassword}
        setConfirmPassword={setConfirmPassword}
      />
      <PersonalInfoForm
        name={name}
        setName={setName}
        birth={birth}
        setBirth={setBirth}
        phone={phone}
        setPhone={setPhone}
        activatePhone={activatePhone}
        setActivatePhone={setActivatePhone}
        setIsValidBirth={setIsValidBirth}
        setIsValidPhone={setIsValidPhone}
        setIsValidActivatePhone={setIsValidActivatePhone}
      />
      <MorePersonalSettingForm
        maling={maling}
        setMaling={setMaling}
        openInfo={openInfo}
        setOpenInfo={setOpenInfo}
      />
      <HStack space={2} mt={5} mb={5} justifyContent="center">
        <Button
          mt={5}
          mx={3}
          bg="#333333"
          borderWidth={1}
          borderColor="black"
          size="xs"
          _text={{fontSize: 14, fontWeight: 'bold', color: 'white'}}
          onPress={handleSummit}>
          {routeParams?.KTShopID ? '정보수정' : '회원가입'}
        </Button>
        <Button
          mt={5}
          mx={3}
          bg="#333333"
          borderWidth={1}
          borderColor="black"
          size="xs"
          _text={{fontSize: 14, fontWeight: 'bold', color: 'white'}}
          onPress={() => navigation.navigate('Main')}>
          목록
        </Button>
      </HStack>
    </Box>
  );
};

export default React.memo(withCommontLayout(RegisterForm));
