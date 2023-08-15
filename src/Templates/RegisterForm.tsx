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
import {useRegisterForm} from '@src/hooks/stateHooks/useRegisterForm';
import RegisterNavigationButton from '@src/Modules/RegisterForm/RegisterNavigationButton';

const RegisterForm = () => {
  const routeParams = useRoute().params as RegisterProps;

  const navigation = useNavigation<StackNavigationProp<StackScreenProps>>();

  const {
    password,
    confirmPassword,
    id,
    name,
    birth,
    phone,
    activatePhone,
    isValidBirth,
    isValidPhone,
    isValidActivatePhone,
    maling,
    openInfo,
  } = useRegisterForm(routeParams);

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
      const param: ParamProps = {
        KTShopID: id,
        UserName: name,
        UserPW: encrypt(password),
        UserBirth: birth,
        UserOpenHp: activatePhone,
        UserHp: phone,
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
      <SiteInfoForm />
      <PersonalInfoForm />
      <MorePersonalSettingForm />
      <HStack space={2} mt={5} mb={5} justifyContent="center">
        <RegisterNavigationButton
          title={routeParams?.KTShopID ? '정보수정' : '회원가입'}
          handleSummit={handleSummit}
        />
        <RegisterNavigationButton
          title="목록"
          handleSummit={() => {
            navigation.navigate('Main');
          }}
        />
      </HStack>
    </Box>
  );
};

export default React.memo(withCommontLayout(RegisterForm));
