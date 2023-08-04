import react from 'react';
import {Box} from 'native-base';
import PanelItem from '@src/Atomic/PanelItem';
import FormItem from '@src/Atomic/FormItem';
import {FontText} from '@src/Atomic/FontText';

interface SiteInfoFormProps {
  userID: string;
}

export default function SiteInfoForm({userID}: SiteInfoFormProps) {
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
      <FormItem
        title="아이디"
        data={userID}
        isDisabled={true}
        type="text"
        icon="check"
      />
      <FontText fontSize={14} px={3} color="#777777">
        영문자, 숫자,_만 입력 가능, 최소 3자이상 입력하세요.
      </FontText>
      <FormItem
        title="비밀번호"
        data={''}
        isDisabled={false}
        type="password"
        icon="lock"
      />
      <FormItem
        title="비밀번호 확인"
        data={''}
        isDisabled={false}
        type="password"
        icon="check"
      />
    </Box>
  );
}
