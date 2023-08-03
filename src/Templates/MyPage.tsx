import React from 'react';
import withCommontLayout from './withCommontLayout';
import {Box} from 'native-base';
import PanelItem from '@src/Atomic/PanelItem';

const MyPage = () => {
  return (
    <Box>
      <PanelItem
        title="MyPage"
        icon="user"
        titleSize={undefined}
        iconSize={undefined}
      />
    </Box>
  );
};

export default React.memo(withCommontLayout(MyPage));
