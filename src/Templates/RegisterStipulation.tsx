import {VStack} from 'native-base';
import React from 'react';
import PanelItem from '@src/Atomic/PanelItem';
import withCommontLayout from './withCommontLayout';
import Notice from '@src/Modules/RegisterStipulation/Notice';
import StipulationFromRegister from '@src/Modules/RegisterStipulation/StipulationFromRegister';

const RegisterStipulation = () => {
  return (
    <VStack space={5}>
      <PanelItem
        title="Register Form"
        icon="sign-in"
        titleSize={undefined}
        iconSize={undefined}
      />
      <Notice />
      <StipulationFromRegister />
    </VStack>
  );
};

export default withCommontLayout(RegisterStipulation);
