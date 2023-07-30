import React from 'react';
import PanelItem from '@src/Atomic/PanelItem';
import {Box} from 'native-base';
import withCommontLayout from './withCommontLayout';
import SiteInfoForm from '@src/Modules/RegisterForm/SiteInfoForm';
import {useUserState} from '@src/contexts/UserContext';
import PersonalInfoForm from '@src/Modules/RegisterForm/PersonalInfoForm';
import MorePersonalSettingForm from '@src/Modules/RegisterForm/MorePersonalSettingForm';

const RegisterForm = () => {
  const [user] = useUserState();

  if (!user) {
    return null;
  }

  return (
    <Box>
      <PanelItem
        title="Register Form"
        icon="file-text"
        titleSize={undefined}
        iconSize={undefined}
      />
      <SiteInfoForm userID={user.UserId || ''} />
      <PersonalInfoForm userName={user.UserNm || ''} />
      <MorePersonalSettingForm />
    </Box>
  );
};

export default React.memo(withCommontLayout(RegisterForm));
