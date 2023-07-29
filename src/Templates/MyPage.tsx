import React from 'react';
import withCommontLayout from './withCommontLayout';
import {Box} from 'native-base';
import PanelItem from '@src/Atomic/PanelItem';
import ColumnNames from '@src/Modules/Mypage/ColumnNames';
import RowModule from '@src/Modules/Mypage/RowModule';

const MyPage = () => {
  return (
    <Box>
      <PanelItem
        title="MyPage"
        icon="user"
        titleSize={undefined}
        iconSize={undefined}
      />
      <ColumnNames />
      <RowModule />
    </Box>
  );
};

export default withCommontLayout(MyPage);
