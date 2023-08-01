import React from 'react';
import {Box} from 'native-base';
import PanelItem from '@src/Atomic/PanelItem';
import withCommontLayout from './withCommontLayout';
import {useUserState} from '@src/contexts/UserContext';

const MyPoint = () => {
  const [user] = useUserState();
  return (
    <Box>
      <PanelItem
        title={`${user?.UserNm}님의 MP 내역`}
        icon="user"
        titleSize={undefined}
        iconSize={undefined}
      />
      {/* <ColumnNames /> */}
    </Box>
  );
};

export default withCommontLayout(MyPoint);
