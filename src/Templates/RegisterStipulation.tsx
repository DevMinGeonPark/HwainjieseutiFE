import {VStack} from 'native-base';
import React from 'react';
import PanelItem from '@src/Atomic/PanelItem';
import withCommontLayout from './withCommontLayout';
import Notice from '@src/Modules/RegisterStipulation/Notice';
import StipulationRegister from '@src/Modules/RegisterStipulation/StipulationRegister';
import StipulationPersonal from '@src/Modules/RegisterStipulation/StipulationPersonal';

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
      {/* TODO: 전문 추가 */}
      <StipulationRegister />
      <StipulationPersonal />
    </VStack>
  );
};

export default withCommontLayout(RegisterStipulation);
