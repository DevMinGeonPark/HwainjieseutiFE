import {Box} from 'native-base';
import React from 'react';
import withCommontLayout from './withCommontLayout';
import PanelItem from '@src/Atomic/PanelItem';

const PrivacyCheck = () => {
  return (
    <Box>
      <PanelItem
        title={`Register`}
        icon="user"
        titleSize={undefined}
        iconSize={undefined}
      />
    </Box>
  );
};

export default withCommontLayout(PrivacyCheck);
