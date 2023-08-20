import react from 'react';
import {Box, VStack} from 'native-base';
import PanelItem from '@src/Atomic/PanelItem';
import FormItem from '@src/Atomic/FormItem';
import {FontText} from '@src/Atomic/FontText';
import {useRoute} from '@react-navigation/native';
import {RegisterProps} from '@src/Types/NavigationTypes';
import {useRegisterForm} from '@src/hooks/stateHooks/useRegisterForm';
import React from 'react';

interface SiteInfoFormProps {
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  id: string;
  setId: React.Dispatch<React.SetStateAction<string>>;
  confirmPassword: string;
  setConfirmPassword: React.Dispatch<React.SetStateAction<string>>;
}

export default function SiteInfoForm({
  password,
  setPassword,
  id,
  setId,
  confirmPassword,
  setConfirmPassword,
}: SiteInfoFormProps) {
  const routeParams = useRoute().params as RegisterProps;

  return (
    <Box
      mt={6}
      pb={5}
      borderTopColor="#CCC"
      borderTopWidth={1}
      borderBottomWidth={1}>
      <PanelItem
        title="사이트 이용정보 입력"
        icon="star"
        titleSize={14}
        iconSize={14}
      />
      <VStack p={3} space={2}>
        <FormItem
          title="아이디"
          isDisabled={routeParams?.KTShopID ? true : false}
          type="text"
          icon="check"
          text={id}
          setText={setId}
        />
        <FontText fontSize={14} color="#777777">
          영문자, 숫자,_만 입력 가능, 최소 3자이상 입력하세요.
        </FontText>

        <FormItem
          title="비밀번호"
          isDisabled={false}
          type="password"
          icon="lock"
          text={password}
          setText={setPassword}
        />
        <FormItem
          title="비밀번호 확인"
          isDisabled={false}
          type="password"
          icon="check"
          text={confirmPassword}
          setText={setConfirmPassword}
        />
      </VStack>
    </Box>
  );
}
