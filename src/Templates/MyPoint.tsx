import React, {useEffect} from 'react';
import {Box} from 'native-base';
import PanelItem from '@src/Atomic/PanelItem';
import withCommontLayout from './withCommontLayout';
import {useUserState} from '@src/contexts/UserContext';
import usePointDetailData from '@src/hooks/queryHooks/usePointDetailData';
import TableBorad from '@src/Modules/MyPoint/TableBorad';

const MyPoint = () => {
  const [user] = useUserState();
  const {data, isLoading} = usePointDetailData({KTShopID: user?.UserId || ''});

  return (
    <Box>
      <PanelItem
        title={`마이페이지`}
        icon="user"
        titleSize={undefined}
        iconSize={undefined}
      />
      {!isLoading && <TableBorad tableData={data} />}
    </Box>
  );
};

export default withCommontLayout(MyPoint);
