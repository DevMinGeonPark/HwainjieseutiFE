import React, {useState} from 'react';
import {FontHeading} from '@src/Atomic/FontHeading';
import PanelItem from '@src/Atomic/PanelItem';
import {Box} from 'native-base';
import withCommontLayout from './withCommontLayout';
import SiteInfoForm from '@src/Modules/RegisterForm/SiteInfoForm';
import {useUserState} from '@src/contexts/UserContext';
import PersonalInfoForm from '@src/Modules/RegisterForm/PersonalInfoForm';
import MorePersonalSettingForm from '@src/Modules/RegisterForm/MorePersonalSettingForm';

const RegisterForm = () => {
  const [user] = useUserState();

  // 각 항목 입력값을 확인할 check 코드 추가
  // 휴대전화 인증 추가 pass

  return (
    <Box>
      <PanelItem
        title="Register Form"
        icon="file-text"
        titleSize={undefined}
        iconSize={undefined}
      />
      <SiteInfoForm userID={user?.UserId || ''} />
      <PersonalInfoForm userName={user?.UserNm || ''} />
      <MorePersonalSettingForm />
    </Box>
  );
};

export default withCommontLayout(RegisterForm);
